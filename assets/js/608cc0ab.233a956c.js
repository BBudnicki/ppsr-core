(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return a?r.a.createElement(h,c(c({ref:t},l),{},{components:a})):r.a.createElement(h,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},116:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(16),r=a(118);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(c)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+p:p}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},118:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(112)),i=a(116),c={id:"implementation",title:"Project Implementation approach",sidebar_label:"Implementation",description:"Project Implementation approach for creating a JSON Schema",hide_table_of_contents:!1},s={unversionedId:"project/implementation",id:"project/implementation",isDocsHomePage:!1,title:"Project Implementation approach",description:"Project Implementation approach for creating a JSON Schema",source:"@site/docs/project/implementation.md",sourceDirName:"project",slug:"/project/implementation",permalink:"/ppsr-core/docs/project/implementation",editUrl:"https://github.com/citizen-science-association/ppsr-core/edit/master/docs/project/implementation.md",version:"current",lastUpdatedBy:"BBudnicki",lastUpdatedAt:1624598124,formattedLastUpdatedAt:"6/25/2021",sidebar_label:"Implementation",frontMatter:{id:"implementation",title:"Project Implementation approach",sidebar_label:"Implementation",description:"Project Implementation approach for creating a JSON Schema",hide_table_of_contents:!1},sidebar:"coreSidebar",previous:{title:"Project Vocabulary",permalink:"/ppsr-core/docs/project/vocabulary"},next:{title:"Dataset Metadata Model",permalink:"/ppsr-core/docs/dataset"}},l=[{value:"1. Transformation of the PPSR Core Project Metadata Model to JSON Schema",id:"1-transformation-of-the-ppsr-core-project-metadata-model-to-json-schema",children:[{value:"\u201ctype\u201d keyword",id:"type-keyword",children:[]},{value:"\u201cformat\u201d keyword",id:"format-keyword",children:[]},{value:"\u201cproperties\u201d keyword",id:"properties-keyword",children:[]},{value:"\u201crequired\u201d keyword",id:"required-keyword",children:[]},{value:"\u201cenum\u201d keyword",id:"enum-keyword",children:[]},{value:"combining schemas",id:"combining-schemas",children:[]}]},{value:"2. Example of Citizen Science data description compliant to the PPSR Core Project Metadata Model to JSON Schema",id:"2-example-of-citizen-science-data-description-compliant-to-the-ppsr-core-project-metadata-model-to-json-schema",children:[]}],p={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"On this page we describe one way of implementing PPSR Core, i.e. to use its terms and definitions to actually provide access to citizen science project descriptions. We explain how already available project descriptions (for example a collection of citizen science projects that all provide data about birds) could be made available using PPRS Core. This can be useful if you want to share your project descriptions with others, or to avoid the development of a new data structure/format when building your own collection of projects."),Object(o.a)("p",null,"Our description consists of two parts:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"First, we create the data structure (or the data format). In this part, we decided to use JSON Schema, which currently is the most used way of describing online data structures. In order to consider the latest version of PPSR Core, we suggest an automated approach to create a compliant JSON Schema from the recent Excel file describing the standard."),Object(o.a)("li",{parentName:"ul"},"Then, we illustrate how an existing project collection (here, citizen science projects related to environmental policies) is provided structured according to the format that we just created. We provide the results in JSON - in a way that allows to check automatically if the descriptions follow the previously defined formatting rules. This automated check is important to ensure that our descriptions are structured in the right (standard) way.")),Object(o.a)("p",null,"The tool used in these examples is Pentaho, which is free and open to re-use. In this way, it is possible for everyone who has the right skills to replicate our examples \u2013 or to modify them for their own purposes."),Object(o.a)("p",null,"Pentaho Spoon Data Integration software can be downloaded at ",Object(o.a)("a",{parentName:"p",href:"https://sourceforge.net/projects/pentaho/files/Pentaho%208.2/client-tools/pdi-ce-8.2.0.0-342.zip/download?use_mirror=netcologne&download=&failedmirror=jztkft.dl.sourceforge.net"},"sourceforge.net"),"."),Object(o.a)("h2",{id:"1-transformation-of-the-ppsr-core-project-metadata-model-to-json-schema"},"1. Transformation of the PPSR Core Project Metadata Model to JSON Schema"),Object(o.a)("p",null,"It is important to maintain synchronicity of resources (documentation, visualizations, schemas, etc.) describing or implementing the PPSR Core standard. For this reason, a single source (master) of the PPSR Core specification should be consistently used for all derived resources (documentation, visualizations, schemas, etc.) to be automatically generated from it."),Object(o.a)("p",null,"The PPSR core implementation issues include, among others, PPSR Core ",Object(o.a)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Serialization"},"serializations"),", and we currently focus on JSON Schema based ones. In particular, we describe the automatic transformation to JSON Schema of the excel file (.xlsx) describing the PPSR Core Project Metadata Model, resulting in an implementation of the standard. The automatic transformation procedure we have described can also help to implement future versions of the standard by automatically generating the implementation structure (in JSON Schema)."),Object(o.a)("p",null,"The input PPSR Project Metadata Model has been downloaded from the ",Object(o.a)("a",{parentName:"p",href:"/ppsr-core/docs/project"},"project overview"),". Our main concern was to implement the ",Object(o.a)("a",{parentName:"p",href:"/ppsr-core/docs/project/core-attributes"},"\u201cCore attributes\u201d")," and the matching ",Object(o.a)("a",{parentName:"p",href:"/ppsr-core/docs/project/vocabulary"},"\u201cVocabulary\u201d")," of this model in JSON Schema. The files in this document are in the ",Object(o.a)("a",{parentName:"p",href:"https://github.com/citizen-science-association/ppsr-core/tree/master/machinereadable"},"machine readable folder")," of our GIT repository."),Object(o.a)("p",null,"We use an ETL (Extract Transform Load) tool to create the transformations to JSON Schema and to JSON Data. For this purpose, we selected the widely used open-source tool Pentaho Data Integration (PDI) that can be downloaded from ",Object(o.a)("a",{parentName:"p",href:"https://sourceforge.net/projects/pentaho/"},"https://sourceforge.net/projects/pentaho/"),"."),Object(o.a)("p",null,"Using the Pentaho graphical user interface (Spoon), a workflow was created that generates from the Excel table (input data) a JSON Schema (output data) - see also Figure 1. Spoon empowers the user to inspect the input data, to transform the data, and to export the newly generated data in supported formats."),Object(o.a)("a",{href:Object(i.a)("img/etl_pentaho_json-schema.png"),target:"_blank"},Object(o.a)("img",{alt:"ETL Pentaho JSON Schema",src:Object(i.a)("img/etl_pentaho_json-schema.png")})),Object(o.a)("div",{align:"center"},"Figure 1. Transformation of PPSR Project Metadata Model (Core attributes and Vocabulary) in JSON Schema with Pentaho Data Integration"),"\xa0",Object(o.a)("p",null,"JSON Schema is a powerful tool to annotate and validate the structure of JSON documents. The most basic schema is a blank JSON object, which constrains nothing, allows anything, and describes nothing. Adding validation keywords to the schema applies constraints on an instance. It is those additions that make a JSON Schema a valuable resource for structuring data in agreed (standard) ways."),Object(o.a)("p",null,"Below we list some constraints and example implementations in JSON Schema for the PPSR Core Project Metadata Model:"),Object(o.a)("h3",{id:"type-keyword"},"\u201ctype\u201d keyword"),Object(o.a)("p",null,"To restrict values to a specific type a \u201ctype\u201d keyword is in use. The \u201ctype\u201d keyword is fundamental to JSON Schema. The JSON Schema defines the following basic types: string, numeric types (integer, number), object, boolean, null."),Object(o.a)("p",null,"Example:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'"projectId": {\n    "$id": "#/properties/Project/properties/projectId",\n    "label": "projectId",\n    "definition": "Globally unique identifier (GUID) for the project. System generated.",\n    "type": "string"\n}\n')),Object(o.a)("h3",{id:"format-keyword"},"\u201cformat\u201d keyword"),Object(o.a)("p",null,"The \u201cformat\u201d keyword allows for basic semantic validation on certain kinds of string values that are commonly used, e.g., for date and time the format in use can be: \u201cdate-time\u201d, \u201cdate\u201d, \u201ctime\u201d; for email addresses \u201cemail\u201d, for hostnames \u201chostname\u201d, and etc."),Object(o.a)("p",null,"Example:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'"projectDateCreated": {\n    "$id": "#/properties/Project/properties/projectDateCreated",\n    "label": "projectDateCreated",\n    "definition": "The date and time that the record was created in the database. Uses the ISO 8601:2004 (E) dateTime standard",\n    "type": "string",\n    "format": "date-time"\n}\n')),Object(o.a)("h3",{id:"properties-keyword"},"\u201cproperties\u201d keyword"),Object(o.a)("p",null,"The properties (key-value pairs) on an object are defined using the properties keyword. The value of properties is an object, where each key is the name of a property and each value is a JSON schema used to validate that property."),Object(o.a)("u",null,"\u201cadditionalProperties\u201d keyword/ \u201cpatternProperties\u201d keyword"),Object(o.a)("p",null,"The additionalProperties keyword is used to control the handling of extra content, that is, properties whose names are not listed in the properties keyword. If not restricted, any additional properties are allowed. additionalProperties can restrict the object so that it either has no additional properties that were not explicitly listed, or it can specify a schema for any additional properties on the object."),Object(o.a)("p",null,"Sometimes that is not enough, and you may want to restrict the names of the extra properties, or you may want to say that, given a particular kind of name, the value should match a particular schema. That is where patternProperties comes in: it is a new keyword that maps from regular expressions to schemas. If an additional property matches a given regular expression, it must also validate against the corresponding schema."),Object(o.a)("p",null,"Example:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'"patternProperties": {\n    "^difficultyLevel$": {\n        "label": "difficultyLevel",\n        "definition": "Assessed class of project difficulty for untrained participants to undertake. (...)\n        "type": "string",\n        "enum": [\n            "Easy",\n            "Medium",\n            "Hard"\n        ]\n    }\n}\n')),Object(o.a)("h3",{id:"required-keyword"},"\u201crequired\u201d keyword"),Object(o.a)("p",null,"By default, the properties defined by the properties keyword are not required. However, one can provide a list of required properties using the required keyword."),Object(o.a)("p",null,"Example:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'"required": [\n    "contactPoint",\n    "projectGeographicLocation",\n    "projectMedia",\n    "language",\n    "projectAim",\n    "projectDescription",\n    "projectDuration",\n    "projectDateCreated",\n    "projectLastUpdatedDate",\n    "projectId",\n    "projectName",\n    "projectResponsiblePartyContactEmail",\n    "projectResponsiblePartyName",\n    "projectScienceType",\n    "projectStatus",\n    "projectStartDate"\n]\n')),Object(o.a)("h3",{id:"enum-keyword"},"\u201cenum\u201d keyword"),Object(o.a)("p",null,"The enum keyword is used to restrict a value to a fixed set of values. It must be an array with at least one element, where each element is unique."),Object(o.a)("p",null,"Example:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'"projectStatus": {\n    "$id": "#/properties/Project/properties/projectStatus",\n    "label": "projectStatus",\n    "definition": "The activity status of the project.",\n    "type": "string",\n    "enum": [\n        "Not yet started",\n        "Active",\n        "Periodically active",\n        "On hold",\n        "Completed",\n        "Abandoned"\n    ]\n}\n')),Object(o.a)("h3",{id:"combining-schemas"},"combining schemas"),Object(o.a)("p",null,"JSON Schema includes a few keywords for combining schemas. Combining schemas may be as simple as allowing a value to be validated against multiple criteria at the same time."),Object(o.a)("p",null,"The keywords used to combine schemas are:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"allOf: Must be valid against all of the subschemas"),Object(o.a)("li",{parentName:"ul"},"anyOf: Must be valid against any of the subschemas"),Object(o.a)("li",{parentName:"ul"},"oneOf: Must be valid against exactly one of the subschemas")),Object(o.a)("p",null,'In the PPSR Project Metadata Model the keyword \u201coneOf\u201d was used, to validate the attributes projectEndDate and projectDuration. In case the attribute projectEndDate has a value \u201cUnknown\u201d then the attribute projectDuration, as a mandatory attribute, needs to have the value \u201cUnknown\u201d as well. If the attribute projectEndDate is of \u201cformat\u201d keyword \u201cdate-time" then the value of the attribute projectDuration needs to be of \u201cformat\u201d keyword \u201cduration\u201d.'),Object(o.a)("p",null,"Example for \u201coneOf\u201d keyword used:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'"oneOf": [\n    {\n        "if": {\n        "properties": {\n            "projectEndDate": {\n                "type": "string",\n                "pattern": "^Unknown$"\n                }\n            }\n        },\n        "then": {\n            "properties": {\n                "projectDuration": {\n                    "pattern": "^Unknown$"\n                    }\n                }\n            },\n        "else": {\n            "properties": {\n                "projectEndDate": {\n                    "format": "date-time"\n                },\n                "projectDuration": {\n                    "format": "duration"\n                }\n            }\n        }\n    }\n]\n')),Object(o.a)("h2",{id:"2-example-of-citizen-science-data-description-compliant-to-the-ppsr-core-project-metadata-model-to-json-schema"},"2. Example of Citizen Science data description compliant to the PPSR Core Project Metadata Model to JSON Schema"),Object(o.a)("p",null,"In this part, we provide an example of Citizen Science data description that is compliant to the implementation of PPSR Core in JSON Schema (i.e. the JSON data description validates against the automatically created JSON Schema)."),Object(o.a)("p",null,"To test the generated JSON Schema and to check the implemented restrictions, a JSON Data file was generated. The data used as input is the inventory of 512 Citizens Science (CS) projects relevant for environmental policies that the Joint Research Centre (JRC) is collecting and managing (",Object(o.a)("a",{parentName:"p",href:"https://data.jrc.ec.europa.eu/dataset/jrc-citsci-10004"},'"An inventory of citizen science activities for environmental policies"'),")."),Object(o.a)("p",null,"First, as the model of the CS Inventory is not the same as the one of PPSR, a transformation between the data models needed to be done \u2013 which consists of attribute renaming, attribute addition, value mapping. The transformation was again performed using Pentaho (see also Figure 2)."),Object(o.a)("a",{href:Object(i.a)("img/etl_pentaho_json-data.png"),target:"_blank"},Object(o.a)("img",{alt:"Transformation of the CS Inventory in JSON Data",src:Object(i.a)("img/etl_pentaho_json-data.png")})),Object(o.a)("div",{align:"center"},"Figure 2. Transformation of the CS Inventory in JSON Data with Pentaho Data Integration"),"\xa0",Object(o.a)("p",null,"When creating both the JSON Schema based on the PPSR Project Metadata Model and a compliant JSON Data file a standard online tool can be use for validating if the created data file matches the actual JSON Schema: ",Object(o.a)("a",{parentName:"p",href:"https://www.jsonschemavalidator.net/"},"https://www.jsonschemavalidator.net/"),"."),Object(o.a)("p",null,"Supporting materials are available from our GitHub repository ",Object(o.a)("a",{parentName:"p",href:"https://github.com/citizen-science-association/ppsr-core/tree/master/machinereadable"},"\u201cmachinereadable\u201d")," that contains the following:"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"Input - folder with the input data used in the workspaces",Object(o.a)("br",{parentName:"li"}),"a. PPSR metadata model: 1_Project_Metadata_Model.xlsx",Object(o.a)("br",{parentName:"li"}),"b. Inventory of 512 environmental citizen science projects: Inventory of environmental citizen science projects_anonymised.xlsx"),Object(o.a)("li",{parentName:"ol"},"Output - folder where the output data from the workspaces are stored  "),Object(o.a)("li",{parentName:"ol"},"Output_ORIGINAL - folder with the output data already generated",Object(o.a)("br",{parentName:"li"}),"a. Generated JSON Schema for PPSR model: PPSR_JSONSchema.js",Object(o.a)("br",{parentName:"li"}),"b. Generated JSON Data for 512 projects of CS Inventory, based on the PPSR model: CSInventrory_JSON.js  "),Object(o.a)("li",{parentName:"ol"},"Workspaces - folder with workspaces for Pentaho Spoon DI",Object(o.a)("br",{parentName:"li"}),"a. Workspace for generating JSON Schema from PPSR model: 1_PPSR_Transformation_XLS2JSONSchema.ktr",Object(o.a)("br",{parentName:"li"}),"b. Workspace for generating JSON Data for CS Inventory: 2_PPSR_CSInventory_JSON.ktr")),Object(o.a)("p",null,"The Pentaho Spoon Data Integration can be downloaded from the following ",Object(o.a)("a",{parentName:"p",href:"https://sourceforge.net/projects/pentaho/files/Pentaho%208.2/client-tools/pdi-ce-8.2.0.0-342.zip/download?use_mirror=netcologne&download=&failedmirror=jztkft.dl.sourceforge.net"},'"sourceforge.net link"'),"."))}d.isMDXComponent=!0}}]);