# grunt-html-components

> Grunt task for node module html-components

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html-components --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html-components');
```

## The "html_components" task

### Overview
In your project's Gruntfile, add a section named `html_components` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html_components: {
      options: {
          // Task-specific options go here.
          componentsFolder: 'components'
      },
      files: [
          {
              cwd: 'test/fixtures/htmlpages',
              src: '**/*.html',
              dest: 'tmp'
          }
      ]
  },
})
```

### Options

#### options.componentsFolder
Type: `String`
Default value: `components`

The folder where the components are stored

#### options.attrNodePrefix
Type: `String`
Default value: `_`

This is the prefix to use when you need to specify the default prefix when you use node to set your attributes

Example :
By default you set the attribute, like in HTML

```html
<mycomp attr="my attribute with simpe string"></mycomp>
```

If you want to insert HTML into this attribute, you write it like this : 

```html
<mycomp>
    <_attr2>
        Here some HTML code <br>
        
        <strong> a strong is used</strong> 
    </_attr2>
</mycomp>
```

### Usage of the component folder

#### Simple tag
The components folder contains all your custom tags. Each file become a tag : 

`mytag.hbs` become automatically a tag to be use
 
```html
<mytag></mytag>
```

#### Typed tag

You can create differents type of a tag, you just have to create a folder,
and it becomes automatically a tag. An then you create a file and if become the type of the tag

Create the folder `components/field`
Then create the file `components/field/tag.hbs`

Use your new tag : 

```html
<field type="tag">

</field>
```


### Usage Examples

####Create your first comopnent
If you want to use html-components in your project, create a folder for your components (ie : `<projectdir>/components)

Inside this folder, you create a file, the name of the file become the name of the tag 
Example : 
```
components/mytag.hbs
```

In `mytag.hbs` you write your html and your create variables that become the attributes of the tag :
Note : The variable {{{html}}} is the content of the tag when you use it

```html
<a class="mytag" href="{{{url}}}" title="{{{customtitle}}}">
    {{{html}}}
</a>
```

Use the tag : 
```html
<mytag url="http://google.com" customtitle="The title">
    Some HTML
</mytag>
```

Result : 

```html
<a class="mytag" href="http://www.google.com" title="The title">
    Some HTML
</a>
```


####Create the layout of all your pages :

This example shows the use of custom component into layout for your pages and the use of custom attributes to customize the header and footer of your pages

`layout.hbs`

```html
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    {{{meta}}}
    <title>{{{title}}}</title>
    {{{head}}}
</head>
<body>
<div id="content">
    {{{html}}}
</div>
<div id="footer"></div>
{{{footer}}}
</body>
</html>
```


In your html page `page.html`

```html
<layout>
    <_meta>
        <meta http-equiv="Allow" content="all">
    </_meta>
    <_head>
        <link type="text/css" href="mycssfile.css">
        <script src="mycustomcript.js"></script>
    </_head>
    
    
    <div class="content">
        The content of the page
    </div>
    
    <_footer>
        some html to add on the footer
    </_footer>
</layout>
```




## Release History
*0.0.1* 

Create the project and add documentation

## License
Copyright (c) 2014 Arnaud Gueras. Licensed under the MIT license.
