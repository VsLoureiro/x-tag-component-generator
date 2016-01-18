# Generator WebComponent

This module is a Yeoman generator used to scaffold webcomponents using x-tag.

![alt text](http://stephenplusplus.github.io/yeoman.io/assets/img/yeoman-logo.png)
![alt text](https://avatars1.githubusercontent.com/u/3239934?v=3&s=200)

## Usage
1. Install Yeoman

    ```sh
    $ npm install yo
    ```

2. Install the generator:

    ```sh
    $ npm install git+https://github.com/VsLoureiro/x-tag-component-generator.git
    ```

3. Create a component, for example called **test**:

    ```sh
    $ yo webcomponent test
    ```
4. When asked **In what folder do you want to create the webcomponent?** write the name of the folder you want to create the component in, for instance, if you want to create your component inside the "src/components" folder just answer "components".

5. The above steps will create a webcomponent already configured with handlebars for templating, a unit test, a markdown file to document your component, an index.html file to test your component individually and a less file.

## Remarks

The generator generates an index.html file to test the component individually, but for this to work you need to comment the imports inside your component and add them as a script tag in the index.html. This is because imports don't work in the browser, unless the components is bundled with a bundler like webpack ou requirejs.

## Error reporting

You may open bug reports on [github](https://github.com/VsLoureiro/x-tag-component-generator/issues).
Please submit useful and complete bug reports.