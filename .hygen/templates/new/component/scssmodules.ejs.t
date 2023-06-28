---
to: ../src/components/<%= componentName %>/_<%= h.changeCase.paramCase(componentName) %>.module.scss
---
:root {

}

.<%= h.changeCase.camel(componentName) %> {
  border: 8px solid var(--color-primary)
}

