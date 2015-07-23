<%= packageName %>
==================

### Directory structure

- `src/`: Where your base component(s) go. 
  - Is used by `babel` for transpiling to `lib/` for distro.
  - Is used by `react-docgen` to read prop documentation (es5 only for now).
- `examples/`: Where you create examples for your component(s). Ideally should be a single file / component, with multiple examples listed in the `examples` array.
  - Is used by `react-styleguide-generator` to build component examples.
- `test/`: Area for tests.
- `test/client/`: Area for `karma` tests. Files must end in `test.spec.js`.

### Building / testing / viewing the component

`npm run dev`
