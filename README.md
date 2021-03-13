# Nathan Shaw

This is a portfolio website for Nathan Shaw.

## Stack

- ReactJs/TypeScript
- SCSS
- Terraform/AWS

# Project Structure

- **infra/** - contains Terraform configuration for provisioning the infrastructure
- **public/** - contains all of the public assets for the React app.
- **src/** - contains the source code for the React app.
  - **components/**
    - **views/** - contains all view components
      - **[view]/**
        - **[View].tsx** - view component
        - **index.ts** - exports view
    - **[component]/**
      - **[Component].tsx** - component
      - **[OtherComponent].tsx** - supporting component
      - **index.ts** - exports component(s)
  - **models/** - contains model definitions
  - **scss/** - contains all style sheets
    - **components/** - contains component specific styles
    - **views/** - contains view specific styles
    - **styles.scss** - SCSS entrypoint
    - **\_variables.scss** - contains global SCSS variables
    - **\_fonts.scss** - contains font definitions and imports
    - **\_[myStyle].scss** - convention for sub-stylesheets
  - **App.tsx** - the main App component
  - **index.tsx** - the app entrypoint
  - **routes.ts** - contains the routes for each view component
  - **\_content.ts** - contains static content

# Infrastructure

The website is hosted in AWS, as a S3 Website. The infrastructure is managed and provisioned using HashiCorp's [Terraform](https://www.terraform.io/). All changes to the terraform will be applied via a workflow, on merge into master.

## Terraform

To run the terraform locally you will need to create a file called `local.tfvars`, in the `/infra` directory.

```hcl
// infra/local.tfvars

AWS_ACCESS_KEY = "<aws access key>"
AWS_SECRET_KEY = "<aws secret key>"
```

As well as that, you'll need to create another file in the `/infra` directory, named `aws-credentials` - which should look like this:

```ini
[default]
aws_access_key_id=<aws access key>
aws_secret_access_key=<aws secret key>
```

Then you can plan the terraform by running the command below in the `/infra` directory.

```
$ terraform plan -var-file="local.tfvars"
```
