<!-- prettier-ignore-start -->
<div align="center">
  <h1>OHIF Medical Imaging Viewer</h1>
  <p><strong>The OHIF Viewer</strong> is a zero-footprint medical image viewer
provided by the <a href="https://ohif.org/">Open Health Imaging Foundation (OHIF)</a>. It is a configurable and extensible progressive web application with out-of-the-box support for image archives which support <a href="https://www.dicomstandard.org/using/dicomweb/">DICOMweb</a>.</p>
</div>


<div align="center">
  <a href="https://docs.ohif.org/"><strong>Read The Docs</strong></a>
</div>
<div align="center">
  <a href="https://viewer.ohif.org/">Live Demo</a> |
  <a href="https://ui.ohif.org/">Component Library</a>
</div>
<div align="center">
  📰 <a href="https://ohif.org/news/"><strong>Join OHIF Newsletter</strong></a> 📰
</div>
<div align="center">
  📰 <a href="https://ohif.org/news/"><strong>Join OHIF Newsletter</strong></a> 📰
</div>



<hr />

[![NPM version][npm-version-image]][npm-url]
[![MIT License][license-image]][license-url]
[![This project is using Percy.io for visual regression testing.][percy-image]](percy-url)
<!-- [![NPM downloads][npm-downloads-image]][npm-url] -->
<!-- [![Pulls][docker-pulls-img]][docker-image-url] -->
<!-- [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FOHIF%2FViewers.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FOHIF%2FViewers?ref=badge_shield) -->

<!-- [![Netlify Status][netlify-image]][netlify-url] -->
<!-- [![CircleCI][circleci-image]][circleci-url] -->
<!-- [![codecov][codecov-image]][codecov-url] -->
<!-- [![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg?style=flat-square)](#contributors) -->
<!-- prettier-ignore-end -->


|     |  | |
| :-: | :---  | :--- |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-measurements.webp?raw=true" alt="Measurement tracking" width="350"/> | Measurement Tracking | [Demo](https://viewer.ohif.org/viewer?StudyInstanceUIDs=1.3.6.1.4.1.25403.345050719074.3824.20170125095438.5) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-segmentation.webp?raw=true" alt="Segmentations" width="350"/> | Labelmap Segmentations  | [Demo](https://viewer.ohif.org/viewer?StudyInstanceUIDs=1.3.12.2.1107.5.2.32.35162.30000015050317233592200000046) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-ptct.webp?raw=true" alt="Hanging Protocols" width="350"/> | Fusion and Custom Hanging protocols  | [Demo](https://viewer.ohif.org/tmtv?StudyInstanceUIDs=1.3.6.1.4.1.14519.5.2.1.7009.2403.334240657131972136850343327463) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-volume-rendering.webp?raw=true" alt="Volume Rendering" width="350"/> | Volume Rendering  | [Demo](https://viewer.ohif.org/viewer?StudyInstanceUIDs=1.3.6.1.4.1.25403.345050719074.3824.20170125095438.5&hangingprotocolId=mprAnd3DVolumeViewport) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-pdf.webp?raw=true" alt="PDF" width="350"/> | PDF  | [Demo](https://viewer.ohif.org/viewer?StudyInstanceUIDs=2.25.317377619501274872606137091638706705333) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-rtstruct.webp?raw=true" alt="RTSTRUCT" width="350"/> | RT STRUCT  | [Demo](https://viewer.ohif.org/viewer?StudyInstanceUIDs=1.3.6.1.4.1.5962.99.1.2968617883.1314880426.1493322302363.3.0) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-4d.webp?raw=true" alt="4D" width="350"/> | 4D  | [Demo](https://viewer.ohif.org/dynamic-volume?StudyInstanceUIDs=2.25.232704420736447710317909004159492840763) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/demo-video.webp?raw=true" alt="VIDEO" width="350"/> | Video  | [Demo](https://viewer.ohif.org/viewer?StudyInstanceUIDs=2.25.96975534054447904995905761963464388233) |
| <img src="https://github.com/OHIF/Viewers/blob/master/platform/docs/docs/assets/img/microscopy.webp?raw=true" alt="microscopy" width="350"/> | Slide Microscopy  | [Demo](https://viewer.ohif.org/microscopy?StudyInstanceUIDs=2.25.141277760791347900862109212450152067508) |

## About

The OHIF Viewer can retrieve
and load images from most sources and formats, render sets in 2D, 3D, and
reconstructed representations; allows for the manipulation, annotation, and
serialization of observations; supports internationalization, OpenID Connect,
offline use, hotkeys, and many more features.

Almost everything offers some degree of customization and configuration. If it
doesn't support something you need, we accept pull requests and have an ever
improving Extension System.

## Why Choose Us

### Community & Experience

The OHIF Viewer is a collaborative effort that has served as the basis for many
active, production, and FDA Cleared medical imaging viewers. It benefits from
our extensive community's collective experience, and from the sponsored
contributions of individuals, research groups, and commercial organizations.

### Built to Adapt

After more than 8-years of integrating with many companies and organizations,
The OHIF Viewer has been rebuilt from the ground up to better address the
varying workflow and configuration needs of its many users. All of the Viewer's
core features are built using its own extension system. The same extensibility
that allows us to offer:

- 2D and 3D medical image viewing
- Multiplanar Reconstruction (MPR)
- Maximum Intensity Project (MIP)
- Whole slide microscopy viewing
- PDF and Dicom Structured Report rendering
- Segmentation rendering as labelmaps and contours
- User Access Control (UAC)
- Context specific toolbar and side panel content
- and many others

Can be leveraged by you to customize the viewer for your workflow, and to add
any new functionality you may need (and wish to maintain privately without
forking).

### Support

- [Report a Bug 🐛](https://github.com/OHIF/Viewers/issues/new?assignees=&labels=Community%3A+Report+%3Abug%3A%2CAwaiting+Reproduction&projects=&template=bug-report.yml&title=%5BBug%5D+)
- [Request a Feature 🚀](https://github.com/OHIF/Viewers/issues/new?assignees=&labels=Community%3A+Request+%3Ahand%3A&projects=&template=feature-request.yml&title=%5BFeature+Request%5D+)
- [Ask a Question 🤗](community.ohif.org)
- [Slack Channel](https://join.slack.com/t/cornerstonejs/shared_invite/zt-1r8xb2zau-dOxlD6jit3TN0Uwf928w9Q)

For commercial support, academic collaborations, and answers to common
questions; please use [Get Support](https://ohif.org/get-support/) to contact
us.


## Developing

### Branches

#### `master` branch - The latest dev (beta) release

- `master` - The latest dev release

This is typically where the latest development happens. Code that is in the master branch has passed code reviews and automated tests, but it may not be deemed ready for production. This branch usually contains the most recent changes and features being worked on by the development team. It's often the starting point for creating feature branches (where new features are developed) and hotfix branches (for urgent fixes).

Each package is tagged with beta version numbers, and published to npm such as `@ohif/ui@3.6.0-beta.1`

### `release/*` branches - The latest stable releases
Once the `master` branch code reaches a stable, release-ready state, we conduct a comprehensive code review and QA testing. Upon approval, we create a new release branch from `master`. These branches represent the latest stable version considered ready for production.

For example, `release/3.5` is the branch for version 3.5.0, and `release/3.6` is for version 3.6.0. After each release, we wait a few days to ensure no critical bugs. If any are found, we fix them in the release branch and create a new release with a minor version bump, e.g., 3.5.1 in the `release/3.5` branch.

Each package is tagged with version numbers and published to npm, such as `@ohif/ui@3.5.0`. Note that `master` is always ahead of the `release` branch. We publish docker builds for both beta and stable releases.

Here is a schematic representation of our development workflow:

![alt text](platform/docs/docs/assets/img/github-readme-branches-Jun2024.png)





### Requirements

- [Yarn 1.20.0+](https://yarnpkg.com/en/docs/install)
- [Node 18+](https://nodejs.org/en/)
- Yarn Workspaces should be enabled on your machine:
  - `yarn config set workspaces-experimental true`

### Getting Started

1. [Fork this repository][how-to-fork]
2. [Clone your forked repository][how-to-clone]
   - `git clone https://github.com/YOUR-USERNAME/Viewers.git`
3. Navigate to the cloned project's directory
4. Add this repo as a `remote` named `upstream`
   - `git remote add upstream https://github.com/OHIF/Viewers.git`
5. `yarn install --frozen-lockfile` to restore dependencies and link projects

:::danger
In general run `yarn install` with the `--frozen-lockfile` flag to help avoid
supply chain attacks by enforcing reproducible dependencies. That is, if the
`yarn.lock` file is clean and does NOT reference compromised packages, then
no compromised packages should land on your machine by using this flag.
:::

#### To Develop

_From this repository's root directory:_

```bash
# Enable Yarn Workspaces
yarn config set workspaces-experimental true

# Restore dependencies
yarn install --frozen-lockfile
```

## Commands

These commands are available from the root directory. Each project directory
also supports a number of commands that can be found in their respective
`README.md` and `package.json` files.

| Yarn Commands                | Description                                                   |
| ---------------------------- | ------------------------------------------------------------- |
| **Develop**                  |                                                               |
| `dev`              | Default development experience for Viewer                     |
| `dev:fast`             | Our experimental fast dev mode that uses rsbuild instead of webpack                     |
| `test:unit`                  | Jest multi-project test runner; overall coverage              |
| **Deploy**                   |                                                               |
| `build`\*                    | Builds production output for our PWA Viewer                   |  |

\* - For more information on different builds, check out our [Deploy
Docs][deployment-docs]

## Project

The OHIF Medical Image Viewing Platform is maintained as a
[`monorepo`][monorepo]. This means that this repository, instead of containing a
single project, contains many projects. If you explore our project structure,
you'll see the following:

```bash
.
├── extensions               #
│   ├── _example             # Skeleton of example extension
│   ├── default              # basic set of useful functionalities (datasources, panels, etc)
│   ├── cornerstone       # image rendering and tools w/ Cornerstone3D
│   ├── cornerstone-dicom-sr # DICOM Structured Report rendering and export
│   ├── cornerstone-dicom-sr # DICOM Structured Report rendering and export
│   ├── cornerstone-dicom-seg # DICOM Segmentation rendering and export
│   ├── cornerstone-dicom-rt # DICOM RTSTRUCT rendering
│   ├── cornerstone-microscopy # Whole Slide Microscopy rendering
│   ├── dicom-pdf # PDF rendering
│   ├── dicom-video # DICOM RESTful Services
│   ├── measurement-tracking # Longitudinal measurement tracking
│   ├── tmtv # Total Metabolic Tumor Volume (TMTV) calculation
|

│
├── modes                    #
│   ├── _example             # Skeleton of example mode
│   ├── basic-dev-mode       # Basic development mode
│   ├── longitudinal         # Longitudinal mode (measurement tracking)
│   ├── tmtv       # Total Metabolic Tumor Volume (TMTV) calculation mode
│   └── microscopy          # Whole Slide Microscopy mode
│
├── platform                 #
│   ├── core                 # Business Logic
│   ├── i18n                 # Internationalization Support
│   ├── ui                   # React component library
│   ├── docs                 # Documentation
│   └── viewer               # Connects platform and extension projects
│
├── ...                      # misc. shared configuration
├── lerna.json               # MonoRepo (Lerna) settings
├── package.json             # Shared devDependencies and commands
└── README.md                # This file
```

## Acknowledgments

To acknowledge the OHIF Viewer in an academic publication, please cite

> _Open Health Imaging Foundation Viewer: An Extensible Open-Source Framework
> for Building Web-Based Imaging Applications to Support Cancer Research_
>
> Erik Ziegler, Trinity Urban, Danny Brown, James Petts, Steve D. Pieper, Rob
> Lewis, Chris Hafey, and Gordon J. Harris
>
> _JCO Clinical Cancer Informatics_, no. 4 (2020), 336-345, DOI:
> [10.1200/CCI.19.00131](https://www.doi.org/10.1200/CCI.19.00131)
>
> Open-Access on Pubmed Central:
> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7259879/

or, for v1, please cite:

> _LesionTracker: Extensible Open-Source Zero-Footprint Web Viewer for Cancer
> Imaging Research and Clinical Trials_
>
> Trinity Urban, Erik Ziegler, Rob Lewis, Chris Hafey, Cheryl Sadow, Annick D.
> Van den Abbeele and Gordon J. Harris
>
> _Cancer Research_, November 1 2017 (77) (21) e119-e122 DOI:
> [10.1158/0008-5472.CAN-17-0334](https://www.doi.org/10.1158/0008-5472.CAN-17-0334)

**Note:** If you use or find this repository helpful, please take the time to
star this repository on GitHub. This is an easy way for us to assess adoption
and it can help us obtain future funding for the project.

This work is supported primarily by the National Institutes of Health, National
Cancer Institute, Informatics Technology for Cancer Research (ITCR) program,
under a
[grant to Dr. Gordon Harris at Massachusetts General Hospital (U24 CA199460)](https://projectreporter.nih.gov/project_info_description.cfm?aid=8971104).

[NCI Imaging Data Commons (IDC) project](https://imaging.datacommons.cancer.gov/) supported the development of new features and bug fixes marked with ["IDC:priority"](https://github.com/OHIF/Viewers/issues?q=is%3Aissue+is%3Aopen+label%3AIDC%3Apriority),
["IDC:candidate"](https://github.com/OHIF/Viewers/issues?q=is%3Aissue+is%3Aopen+label%3AIDC%3Acandidate) or ["IDC:collaboration"](https://github.com/OHIF/Viewers/issues?q=is%3Aissue+is%3Aopen+label%3AIDC%3Acollaboration). NCI Imaging Data Commons is supported by contract number 19X037Q from
Leidos Biomedical Research under Task Order HHSN26100071 from NCI. [IDC Viewer](https://learn.canceridc.dev/portal/visualization) is a customized version of the OHIF Viewer.

This project is tested with BrowserStack. Thank you for supporting open-source!

## License

MIT © [OHIF](https://github.com/OHIF)

<!--
  Links
  -->

<!-- prettier-ignore-start -->
<!-- Badges -->
[lerna-image]: https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg
[lerna-url]: https://lerna.js.org/
[netlify-image]: https://api.netlify.com/api/v1/badges/32708787-c9b0-4634-b50f-7ca41952da77/deploy-status
[netlify-url]: https://app.netlify.com/sites/ohif-dev/deploys
[all-contributors-image]: https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square
[circleci-image]: https://circleci.com/gh/OHIF/Viewers.svg?style=svg
[circleci-url]: https://circleci.com/gh/OHIF/Viewers
[codecov-image]: https://codecov.io/gh/OHIF/Viewers/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/OHIF/Viewers/branch/master
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
<!-- ROW -->
[npm-url]: https://npmjs.org/package/@ohif/app
[npm-downloads-image]: https://img.shields.io/npm/dm/@ohif/app.svg?style=flat-square
[npm-version-image]: https://img.shields.io/npm/v/@ohif/app.svg?style=flat-square
[docker-pulls-img]: https://img.shields.io/docker/pulls/ohif/viewer.svg?style=flat-square
[docker-image-url]: https://hub.docker.com/r/ohif/app
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE
[percy-image]: https://percy.io/static/images/percy-badge.svg
[percy-url]: https://percy.io/Open-Health-Imaging-Foundation/OHIF-Viewer
<!-- Links -->
[monorepo]: https://en.wikipedia.org/wiki/Monorepo
[how-to-fork]: https://help.github.com/en/articles/fork-a-repo
[how-to-clone]: https://help.github.com/en/articles/fork-a-repo#step-2-create-a-local-clone-of-your-fork
[ohif-architecture]: https://docs.ohif.org/architecture/index.html
[ohif-extensions]: https://docs.ohif.org/architecture/index.html
[deployment-docs]: https://docs.ohif.org/deployment/
[react-url]: https://reactjs.org/
[pwa-url]: https://developers.google.com/web/progressive-web-apps/
[ohif-viewer-url]: https://www.npmjs.com/package/@ohif/app
[configuration-url]: https://docs.ohif.org/configuring/
[extensions-url]: https://docs.ohif.org/extensions/
<!-- Platform -->
[platform-core]: platform/core/README.md
[core-npm]: https://www.npmjs.com/package/@ohif/core
[platform-i18n]: platform/i18n/README.md
[i18n-npm]: https://www.npmjs.com/package/@ohif/i18n
[platform-ui]: platform/ui/README.md
[ui-npm]: https://www.npmjs.com/package/@ohif/ui
[platform-viewer]: platform/app/README.md
[viewer-npm]: https://www.npmjs.com/package/@ohif/app
<!-- Extensions -->
[extension-cornerstone]: extensions/cornerstone/README.md
[cornerstone-npm]: https://www.npmjs.com/package/@ohif/extension-cornerstone
[extension-dicom-html]: extensions/dicom-html/README.md
[html-npm]: https://www.npmjs.com/package/@ohif/extension-dicom-html
[extension-dicom-microscopy]: extensions/dicom-microscopy/README.md
[microscopy-npm]: https://www.npmjs.com/package/@ohif/extension-dicom-microscopy
[extension-dicom-pdf]: extensions/dicom-pdf/README.md
[pdf-npm]: https://www.npmjs.com/package/@ohif/extension-dicom-pdf
[extension-vtk]: extensions/vtk/README.md
[vtk-npm]: https://www.npmjs.com/package/@ohif/extension-vtk
<!-- prettier-ignore-end -->

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FOHIF%2FViewers.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2FOHIF%2FViewers?ref=badge_large&issueType=license)


### LEMBRAR DE MEXER NA IMPLEMENTAÇÃO DA API PARA GARANTIR A AUTENTICAÇÃO

## ./node_modules/dicomweb-client/src/api.js

```js
import { multipartEncode, multipartDecode } from './message.js';

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function areValidRequestHooks(requestHooks) {
    const isValid =
        Array.isArray(requestHooks) &&
        requestHooks.every(
            requestHook =>
                typeof requestHook === 'function' && requestHook.length === 2,
        );

    if (!isValid) {
        console.warn(
            'Request hooks should have the following signature: ' +
            'function requestHook(request, metadata) { return request; }',
        );
    }

    return isValid;
}

const getFirstResult = result => result[0];

const MEDIATYPES = {
    DICOM: 'application/dicom',
    DICOM_JSON: 'application/dicom+json',
    OCTET_STREAM: 'application/octet-stream',
    PDF: 'application/pdf',
    JPEG: 'image/jpeg',
    PNG: 'image/png',
};

/**
 * debugLog is a function that can be called with console.log arguments, and will
 * be conditionally displayed, only when debug logging is enabled.
 */
let debugLog = () => { };

/**
 * @typedef { import("../types/types").InstanceMetadata } InstanceMetadata
 */

/**
 * A callback with the request instance and metadata information
 * of the currently request being executed that should necessarily
 * return the given request optionally modified.
 * @typedef {function} RequestHook
 * @param {XMLHttpRequest} request - The original XMLHttpRequest instance.
 * @param {object} metadata - The metadata used by the request.
 */

/**
 * Class for interacting with DICOMweb RESTful services.
 */
class DICOMwebClient {
    hasRefreshed = false;
    isRefreshing = false;
    pendingRequests = [];
    refreshEndpoint = '/api/auth/refresh';

    processPendingRequests(success) {
        this.pendingRequests.forEach(({ resolve, reject, requestFunction }) => {
            if (success) {
                requestFunction().then(resolve)
                    .catch(reject);
            } else {
                reject(new Error('Request failed due to token refresh failure'));
            }
        });
    }

    /**
     * @constructor
     * @param {Object} options
     * @param {String} options.url - URL of the DICOMweb RESTful Service endpoint
     * @param {String=} options.qidoURLPrefix - URL path prefix for QIDO-RS
     * @param {String=} options.wadoURLPrefix - URL path prefix for WADO-RS
     * @param {String=} options.stowURLPrefix - URL path prefix for STOW-RS
     * @param {String=} options.username - Username
     * @param {String=} options.password - Password
     * @param {Object=} options.headers - HTTP headers
     * @param {Array.<RequestHook>=} options.requestHooks - Request hooks.
     * @param {Object=} options.verbose - print to console request warnings and errors, default true
     * @param {Object=} options.debug - print to the console debug level information/status updates.
     * @param {boolean|String} options.singlepart - retrieve singlepart for the named types.
     * The available types are:  bulkdata, video, image.  true means all.
     */
    constructor(options) {
        this.baseURL = options.url;
        if (!this.baseURL) {
            console.error('no DICOMweb base url provided - calls that require a URL will fail');
        }

        if ('username' in options) {
            this.username = options.username;
            if (!('password' in options)) {
                console.error(
                    'no password provided to authenticate with DICOMweb service',
                );
            }
            this.password = options.password;
        }

        if ('qidoURLPrefix' in options) {
            debugLog(`use URL prefix for QIDO-RS: ${options.qidoURLPrefix}`);
            this.qidoURL = `${this.baseURL}/${options.qidoURLPrefix}`;
        } else {
            this.qidoURL = this.baseURL;
        }

        if ('wadoURLPrefix' in options) {
            debugLog(`use URL prefix for WADO-RS: ${options.wadoURLPrefix}`);
            this.wadoURL = `${this.baseURL}/${options.wadoURLPrefix}`;
        } else {
            this.wadoURL = this.baseURL;
        }

        if ('stowURLPrefix' in options) {
            debugLog(`use URL prefix for STOW-RS: ${options.stowURLPrefix}`);
            this.stowURL = `${this.baseURL}/${options.stowURLPrefix}`;
        } else {
            this.stowURL = this.baseURL;
        }

        if (options.singlepart) {
            debugLog('use singlepart', options.singlepart);
            this.singlepart = options.singlepart === true ? 'bulkdata,video,image' : options.singlepart;
        } else {
            this.singlepart = '';
        }

        if ('requestHooks' in options) {
            this.requestHooks = options.requestHooks;
        }

        // Headers to pass to requests.
        this.headers = options.headers || {};

        // Optional error interceptor callback to handle any failed request.
        this.errorInterceptor = options.errorInterceptor || (() => undefined);

        // Verbose - print to console request warnings and errors, default true
        this.verbose = options.verbose !== false;

        this.setDebug(options.debug);


    }

    /**
     * Allows setting the debug log information.
     * Note this is different from verbose in that verbose is whether to include warning/error information, defaulting to true
     *
     * @param {boolean} debugLevel
     * @param {function} debugLogFunction to call with the debug output arguments.
     */
    setDebug(debugLevel = false, debugLogFunction = null) {
        this.debugLevel = !!debugLevel;
        debugLog = debugLogFunction || debugLevel ? console.log : () => { };
    }

    /**
     * Gets debug flag
     *
     * @returns true if debug logging is enabled
     */
    getDebug() {
        return this.debugLevel;
    }

    /**
     * Sets verbose flag.
     *
     * @param {Boolean} verbose
     */
    setVerbose(verbose) {
        this.verbose = verbose;
    }

    /**
     * Gets verbose flag.
     *
     * @return {Boolean} verbose
     */
    getVerbose() {
        return this.verbose;
    }

    static _parseQueryParameters(params = {}) {
        let queryString = '?';
        Object.keys(params).forEach((key, index) => {
            if (index !== 0) {
                queryString += '&';
            }
            queryString += `${key}=${encodeURIComponent(params[key])}`;
        });
        return queryString;
    }

    /**
     * Performs an HTTP request.
     *
     * @param {String} url
     * @param {String} method
     * @param {Object} headers
     * @param {Object} options
     * @param {Array.<RequestHook>} options.requestHooks - Request hooks.
     * @param {XMLHttpRequest} [options.request] - if specified, the request to use, otherwise one will be created; useful for adding custom upload and abort listeners/objects
     * @return {*}
     * @private
     */
    _httpRequest(url, method, headers = {}, options = {}) {
        const { errorInterceptor, requestHooks } = this;

        return new Promise((resolve, reject) => {
            let request = options.request ? options.request : new XMLHttpRequest();

            request.open(method, url, true);
            if ('responseType' in options) {
                request.responseType = options.responseType;
            }

            if (typeof headers === 'object') {
                Object.keys(headers).forEach(key => {
                    request.setRequestHeader(key, headers[key]);
                });
            }

            // now add custom headers from the user
            // (e.g. access tokens)
            const userHeaders = this.headers;
            Object.keys(userHeaders).forEach(key => {
                request.setRequestHeader(key, userHeaders[key]);
            });

            // Event triggered when upload starts
            request.onloadstart = function onloadstart() {
                debugLog('upload started: ', url)
            };

            // Event triggered when upload ends
            request.onloadend = function onloadend() {
                debugLog('upload finished')
            };

            // Handle response message
            request.onreadystatechange = async () => {
                if (request.readyState !== 4) return;

                if (request.status === 200) {
                    const contentType = request.getResponseHeader('Content-Type');
                    // Automatically distinguishes between multipart and singlepart in an array buffer, and
                    // converts them into a consistent type.
                    if (contentType && contentType.indexOf('multipart') !== -1) {
                        resolve(multipartDecode(request.response));
                    } else if (request.responseType === 'arraybuffer') {
                        resolve([request.response]);
                    } else {
                        resolve(request.response);
                    }
                } else if (request.status === 202) {
                    if (this.verbose) {
                        console.warn('some resources already existed: ', request);
                    }
                    resolve(request.response);
                } else if (request.status === 204) {
                    if (this.verbose) {
                        console.warn('empty response for request: ', request);
                    }
                    resolve([]);
                } else {
                    // If Its refreshing, we want to queue the request until the refresh is done, then retry it.
                    // We will reject the request if the refresh fails, but we want to try to refresh first before rejecting.
                    if (this.isRefreshing) {
                        this.pendingRequests.push({
                            resolve,
                            reject,
                            requestFunction: () => this._httpRequest(url, method, headers, options),
                        });
                        return;
                    }

                    const error = new Error('request failed');
                    error.request = request;
                    error.response = request.response;
                    error.status = request.status;
                    if (this.verbose) {
                        console.error('request failed: ', request);
                        console.error(error);
                        console.error(error.response);
                    }

                    errorInterceptor(error);

                    const responseStatusCode = request.status;
                    const sentUrl = request.responseURL || url;
                    // If the request failed due to an unauthorized error,
                    // and we haven't already tried refreshing the token,
                    // and this isn't a request to refresh the token itself,
                    // then try refreshing the token.
                    if (responseStatusCode === 401 && !sentUrl.includes('refresh') && !this.isRefreshing && !this.hasRefreshed) {
                        this.isRefreshing = true;
                        this.hasRefreshed = true;
                        try {
                            const domain = new URL(this.refreshEndpoint).origin;
                            const refreshUrl = this.refreshEndpoint.startsWith('http') ? this.refreshEndpoint : `${domain}${this.refreshEndpoint}`;
                            await this.refreshToken(refreshUrl);
                            const retryResponse = await this._httpRequest(url, method, headers, options);
                            this.processPendingRequests(true);
                            resolve(retryResponse);
                        } catch (refreshError) {
                            this.processPendingRequests(false, refreshError);
                            console.error('token refresh failed: ', refreshError);
                            reject(error);
                        }
                    }
                    reject(error);
                }
            };

            // Event triggered while download progresses
            if ('progressCallback' in options) {
                if (typeof options.progressCallback === 'function') {
                    request.onprogress = options.progressCallback;
                }
            }

            if (requestHooks && areValidRequestHooks(requestHooks)) {
                const combinedHeaders = Object.assign({}, headers, this.headers);
                const metadata = { method, url, headers: combinedHeaders };
                const pipeRequestHooks = functions => args =>
                    functions.reduce((props, fn) => fn(props, metadata), args);
                const pipedRequest = pipeRequestHooks(requestHooks);
                request = pipedRequest(request);
            }

            // Add withCredentials to request if needed
            if ('withCredentials' in options) {
                if (options.withCredentials) {
                    request.withCredentials = true;
                }
            }

            if ('data' in options) {
                request.send(options.data);
            } else {
                request.send();
            }
        });
    }

    /**
     * Refreshes the token by making a request to the refresh endpoint.
     */
    async refreshToken(refreshUrl) {
        const refreshRequest = new XMLHttpRequest();
        refreshRequest.withCredentials = true;
        refreshRequest.open('POST', refreshUrl, true);
        return new Promise((resolve, reject) => {
            refreshRequest.onreadystatechange = () => {
                if (refreshRequest.readyState === 4) {
                    if (refreshRequest.status === 200) {
                        debugLog('token refresh successful');
                        this.isRefreshing = false;
                        resolve();
                    } else {
                        const error = new Error('token refresh failed');
                        error.request = refreshRequest;
                        error.response = refreshRequest.response;
                        error.status = refreshRequest.status;
                        console.error('token refresh failed: ', refreshRequest);
                        console.error(error);
                        console.error(error.response);
                        this.isRefreshing = false;
                        reject(error);
                    }
                }
            };
            refreshRequest.send();
        });
    }

    /**
     * Performs an HTTP GET request.
     *
     * @param {String} url
     * @param {Object} headers
     * @param {Object} responseType
     * @param {Function} progressCallback
     * @return {*}
     * @private
     */
    _httpGet(url, headers, responseType, progressCallback, withCredentials) {
        return this._httpRequest(url, 'get', headers, {
            responseType,
            progressCallback,
            withCredentials,
        });
    }

    /**
     * Performs an HTTP GET request that accepts a message with application/json
     * media type.
     *
     * @param {String} url
     * @param {Object} params
     * @param {Function} progressCallback
     * @return {*}
     * @private
     */
    _httpGetApplicationJson(url, params = {}, progressCallback, withCredentials) {
        let urlWithQueryParams = url;

        if (typeof params === 'object') {
            if (!isEmptyObject(params)) {
                urlWithQueryParams += DICOMwebClient._parseQueryParameters(params);
            }
        }
        const headers = { Accept: MEDIATYPES.DICOM_JSON };
        const responseType = 'json';
        return this._httpGet(
            urlWithQueryParams,
            headers,
            responseType,
            progressCallback,
            withCredentials,
        );
    }

    /**
     * Performs an HTTP GET request that accepts a message with application/pdf
     * media type.
     *
     * @param {String} url
     * @param {Object} params
     * @param {Function} progressCallback
     * @return {*}
     * @private
     */
    _httpGetApplicationPdf(url, params = {}, progressCallback, withCredentials) {
        let urlWithQueryParams = url;

        if (typeof params === 'object') {
            if (!isEmptyObject(params)) {
                urlWithQueryParams += DICOMwebClient._parseQueryParameters(params);
            }
        }
        const headers = { Accept: MEDIATYPES.PDF };
        const responseType = 'json';
        return this._httpGet(
            urlWithQueryParams,
            headers,
            responseType,
            progressCallback,
            withCredentials,
        );
    }

    /**
     * Performs an HTTP GET request that accepts a message with an image
     media type.
     *
     * @param {String} url
     * @param {Object[]} mediaTypes
     * @param {Object} params
     * @param {Function} progressCallback
     * @return {*}
     * @private
     */
    _httpGetImage(
        url,
        mediaTypes,
        params = {},
        progressCallback,
        withCredentials,
    ) {
        let urlWithQueryParams = url;

        if (typeof params === 'object') {
            if (!isEmptyObject(params)) {
                urlWithQueryParams += DICOMwebClient._parseQueryParameters(params);
            }
        }

        const supportedMediaTypes = [
            'image/',
            'image/*',
            'image/jpeg',
            'image/jp2',
            'image/gif',
            'image/png',
        ];

        const acceptHeaderFieldValue = DICOMwebClient._buildAcceptHeaderFieldValue(
            mediaTypes,
            supportedMediaTypes,
        );
        const headers = { Accept: acceptHeaderFieldValue };
        const responseType = 'arraybuffer';
        return this._httpGet(
            urlWithQueryParams,
            headers,
            responseType,
            progressCallback,
            withCredentials,
        );
    }

    /**
     * Performs an HTTP GET request that accepts a message with a text
     media type.
     *
     * @param {String} url
     * @param {Object[]} mediaTypes
     * @param {Object} params
     * @param {Function} progressCallback
     * @return {*}
     * @private
     */
    _httpGetText(
        url,
        mediaTypes,
        params = {},
        progressCallback,
        withCredentials,
    ) {
        let urlWithQueryParams = url;

        if (typeof params === 'object') {
            if (!isEmptyObject(params)) {
                urlWithQueryParams += DICOMwebClient._parseQueryParameters(params);
            }
        }

        const supportedMediaTypes = [
            'text/',
            'text/*',
            'text/html',
            'text/plain',
            'text/rtf',
            'text/xml',
        ];

        const acceptHeaderFieldValue = DICOMwebClient._buildAcceptHeaderFieldValue(
            mediaTypes,
            supportedMediaTypes,
        );
        const headers = { Accept: acceptHeaderFieldValue };
        const responseType = 'arraybuffer';
        return this._httpGet(
            urlWithQueryParams,
            headers,
            responseType,
            progressCallback,
            withCredentials,
        );
    }

    /**
     * Performs an HTTP GET request that accepts a message with a video
     media type.
     *
     * @param {String} url
     * @param {Object[]} mediaTypes
     * @param {Object} params
     * @param {Function} progressCallback
     * @return {*}
     * @private
     */
    _httpGetVideo(
        url,
        mediaTypes,
        params = {},
        progressCallback,
        withCredentials,
    ) {
        let urlWithQueryParams = url;

        if (typeof params === 'object') {
            if (!isEmptyObject(params)) {
                urlWithQueryParams += DICOMwebClient._parseQueryParameters(params);
            }
        }

        const supportedMediaTypes = [
            'video/',
            'video/*',
            'video/mpeg',
            'video/mp4',
            'video/H265',
        ];

        const acceptHeaderFieldValue = DICOMwebClient._buildAcceptHeaderFieldValue(
            mediaTypes,
            supportedMediaTypes,
        );
        const headers = { Accept: acceptHeaderFieldValue };
        const responseType = 'arraybuffer';
        return this._httpGet(
            urlWithQueryParams,
            headers,
            responseType,
            progressCallback,
            withCredentials,
        );
    }

    /**
     * Asserts that a given media type is valid.
     *
     * @params {String} mediaType media type
     */
    static _assertMediaTypeIsValid(mediaType) {
        if (!mediaType) {
            throw new Error(`Not a valid media type: ${mediaType}`);
        }

        const sepIndex = mediaType.indexOf('/');
        if (sepIndex === -1) {
            throw new Error(`Not a valid media type: ${mediaType}`);
        }

        const mediaTypeType = mediaType.slice(0, sepIndex);
        const types = ['application', 'image', 'text', 'video'];
        if (!types.includes(mediaTypeType)) {
            throw new Error(`Not a valid media type: ${mediaType}`);
        }

        if (mediaType.slice(sepIndex + 1).includes('/')) {
            throw new Error(`Not a valid media type: ${mediaType}`);
        }
    }

    /**
     * Performs an HTTP GET request that accepts a multipart message with an image media type.
     *
     * @param {String} url - Unique resource locator
     * @param {Object[]} mediaTypes - Acceptable media types and optionally the UIDs of the
     corresponding transfer syntaxes
     * @param {Array} byteRange - Start and end of byte range
     * @param {Object} params - Additional HTTP GET query parameters
     * @param {Boolean} rendered - Whether resource should be requested using rendered media types
     * @param {Function} progressCallback
     * @private
     * @returns {Promise<Array>} Content of HTTP message body parts
     */
    _httpGetMultipartImage(
        url,
        mediaTypes,
        byteRange,
        params,
        rendered = false,
        progressCallback,
        withCredentials,
    ) {
        const headers = {};
        let supportedMediaTypes;
        if (rendered) {
            supportedMediaTypes = [
                'image/jpeg',
                'image/gif',
                'image/png',
                'image/jp2',
            ];
        } else {
            supportedMediaTypes = {
                '1.2.840.10008.1.2.5': ['image/x-dicom-rle'],
                '1.2.840.10008.1.2.4.50': ['image/jpeg'],
                '1.2.840.10008.1.2.4.51': ['image/jpeg'],
                '1.2.840.10008.1.2.4.57': ['image/jpeg'],
                '1.2.840.10008.1.2.4.70': ['image/jpeg'],
                '1.2.840.10008.1.2.4.80': ['image/x-jls', 'image/jls'],
                '1.2.840.10008.1.2.4.81': ['image/x-jls', 'image/jls'],
                '1.2.840.10008.1.2.4.90': ['image/jp2'],
                '1.2.840.10008.1.2.4.91': ['image/jp2'],
                '1.2.840.10008.1.2.4.92': ['image/jpx'],
                '1.2.840.10008.1.2.4.93': ['image/jpx'],
            };

            if (byteRange) {
                headers.Range = DICOMwebClient._buildRangeHeaderFieldValue(byteRange);
            }
        }

        headers.Accept = DICOMwebClient._buildMultipartAcceptHeaderFieldValue(
            mediaTypes,
            supportedMediaTypes,
        );

        return this._httpGet(url, headers, 'arraybuffer', progressCallback, withCredentials);
    }

    /**
     * Performs an HTTP GET request that accepts a multipart message with a video media type.
     *
     * @param {String} url - Unique resource locator
     * @param {Object[]} mediaTypes - Acceptable media types and optionally the UIDs of the
     corresponding transfer syntaxes
     * @param {Array} byteRange - Start and end of byte range
     * @param {Object} params - Additional HTTP GET query parameters
     * @param {Boolean} rendered - Whether resource should be requested using rendered media types
     * @param {Function} progressCallback
     * @private
     * @returns {Promise<Array>} Content of HTTP message body parts
     */
    _httpGetMultipartVideo(
        url,
        mediaTypes,
        byteRange,
        params,
        rendered = false,
        progressCallback,
        withCredentials,
    ) {
        const headers = {};
        let supportedMediaTypes;
        if (rendered) {
            supportedMediaTypes = [
                'video/',
                'video/*',
                'video/mpeg2',
                'video/mp4',
                'video/H265',
            ];
        } else {
            supportedMediaTypes = {
                '1.2.840.10008.1.2.4.100': ['video/mpeg2'],
                '1.2.840.10008.1.2.4.101': ['video/mpeg2'],
                '1.2.840.10008.1.2.4.102': ['video/mp4'],
                '1.2.840.10008.1.2.4.103': ['video/mp4'],
                '1.2.840.10008.1.2.4.104': ['video/mp4'],
                '1.2.840.10008.1.2.4.105': ['video/mp4'],
                '1.2.840.10008.1.2.4.106': ['video/mp4'],
            };

            if (byteRange) {
                headers.Range = DICOMwebClient._buildRangeHeaderFieldValue(byteRange);
            }
        }

        headers.Accept = DICOMwebClient._buildMultipartAcceptHeaderFieldValue(
            mediaTypes,
            supportedMediaTypes,
        );

        return this._httpGet(url, headers, 'arraybuffer', progressCallback, withCredentials);
    }

    /**
     * Performs an HTTP GET request that accepts a multipart message
     * with a application/dicom media type.
     *
     * @param {String} url - Unique resource locator
     * @param {Object[]} mediaTypes - Acceptable media types and optionally the UIDs of the
     corresponding transfer syntaxes
     * @param {Object} params - Additional HTTP GET query parameters
     * @param {Function} progressCallback
     * @private
     * @returns {Promise<Array>} Content of HTTP message body parts
     */
    _httpGetMultipartApplicationDicom(
        url,
        mediaTypes,
        params,
        progressCallback,
        withCredentials,
    ) {
        const headers = {};
        const defaultMediaType = 'application/dicom';
        const supportedMediaTypes = {
            '1.2.840.10008.1.2.1': [defaultMediaType],
            '1.2.840.10008.1.2.5': [defaultMediaType],
            '1.2.840.10008.1.2.4.50': [defaultMediaType],
            '1.2.840.10008.1.2.4.51': [defaultMediaType],
            '1.2.840.10008.1.2.4.57': [defaultMediaType],
            '1.2.840.10008.1.2.4.70': [defaultMediaType],
            '1.2.840.10008.1.2.4.80': [defaultMediaType],
            '1.2.840.10008.1.2.4.81': [defaultMediaType],
            '1.2.840.10008.1.2.4.90': [defaultMediaType],
            '1.2.840.10008.1.2.4.91': [defaultMediaType],
            '1.2.840.10008.1.2.4.92': [defaultMediaType],
            '1.2.840.10008.1.2.4.93': [defaultMediaType],
            '1.2.840.10008.1.2.4.100': [defaultMediaType],
            '1.2.840.10008.1.2.4.101': [defaultMediaType],
            '1.2.840.10008.1.2.4.102': [defaultMediaType],
            '1.2.840.10008.1.2.4.103': [defaultMediaType],
            '1.2.840.10008.1.2.4.104': [defaultMediaType],
            '1.2.840.10008.1.2.4.105': [defaultMediaType],
            '1.2.840.10008.1.2.4.106': [defaultMediaType],
        };

        let acceptableMediaTypes = mediaTypes;
        if (!mediaTypes) {
            acceptableMediaTypes = [{ mediaType: defaultMediaType }];
        }

        headers.Accept = DICOMwebClient._buildMultipartAcceptHeaderFieldValue(
            acceptableMediaTypes,
            supportedMediaTypes,
        );

        return this._httpGet(url, headers, 'arraybuffer', progressCallback, withCredentials);
    }

    /**
     * Performs an HTTP GET request that accepts a multipart message
     * with a application/octet-stream, OR any of the equivalencies for that (eg
     * application/pdf etc)
     *
     * @param {String} url - Unique resource locator
     * @param {Object[]} mediaTypes - Acceptable media types and optionally the UIDs of the
     corresponding transfer syntaxes
     * @param {Array} byteRange start and end of byte range
     * @param {Object} params - Additional HTTP GET query parameters
     * @param {Function} progressCallback
     * @private
     * @returns {Promise<Array>} Content of HTTP message body parts
     */
    _httpGetMultipartApplicationOctetStream(
        url,
        mediaTypes,
        byteRange,
        params,
        progressCallback,
        withCredentials,
    ) {
        const headers = {};
        const defaultMediaType = 'application/octet-stream';
        const supportedMediaTypes = {
            '1.2.840.10008.1.2.1': [...Object.values(MEDIATYPES)],
        };

        let acceptableMediaTypes = mediaTypes;
        if (!mediaTypes) {
            acceptableMediaTypes = [{ mediaType: defaultMediaType }];
        }

        if (byteRange) {
            headers.Range = DICOMwebClient._buildRangeHeaderFieldValue(byteRange);
        }

        headers.Accept = DICOMwebClient._buildMultipartAcceptHeaderFieldValue(
            acceptableMediaTypes,
            supportedMediaTypes,
        );

        return this._httpGet(url, headers, 'arraybuffer', progressCallback, withCredentials);
    }

    /**
     * Performs an HTTP POST request.
     *
     * @param {String} url - Unique resource locator
     * @param {Object} headers - HTTP header fields
     * @param {Array} data - Data that should be stored
     * @param {Function} progressCallback
     * @param {Function} progressCallback
     * @param {XMLHttpRequest} request - if specified, the request to use, otherwise one will be created; useful for adding custom upload and abort listeners/objects
     * @private
     * @returns {Promise} Response
     */
    _httpPost(url, headers, data, progressCallback, withCredentials, request) {
        return this._httpRequest(url, 'post', headers, {
            data,
            progressCallback,
            withCredentials,
            request,
        });
    }

    /**
     * Performs an HTTP POST request with content-type application/dicom+json.
     *
     * @param {String} url - Unique resource locator
     * @param {Object} headers - HTTP header fields
     * @param {Array} data - Data that should be stored
     * @param {Function} progressCallback
     * @private
     * @returns {Promise} Response
     */
    _httpPostApplicationJson(url, data, progressCallback, withCredentials) {
        const headers = { 'Content-Type': MEDIATYPES.DICOM_JSON };
        return this._httpPost(
            url,
            headers,
            data,
            progressCallback,
            withCredentials,
        );
    }

    /**
     * Parses media type and extracts its type and subtype.
     *
     * @param {String} mediaType - HTTP media type (e.g. image/jpeg)
     * @private
     * @returns {String[]} Media type and subtype
     */
    static _parseMediaType(mediaType) {
        DICOMwebClient._assertMediaTypeIsValid(mediaType);

        return mediaType.split('/');
    }

    /**
     * Builds an accept header field value for HTTP GET request messages.
     *
     * @param {Object[]} mediaTypes - Acceptable media types
     * @param {Object[]} supportedMediaTypes - Supported media types
     * @return {*}
     * @private
     */
    static _buildAcceptHeaderFieldValue(mediaTypes, supportedMediaTypes) {
        if (!Array.isArray(mediaTypes)) {
            throw new Error('Acceptable media types must be provided as an Array');
        }

        const fieldValueParts = mediaTypes.map(item => {
            const { mediaType } = item;

            DICOMwebClient._assertMediaTypeIsValid(mediaType);
            if (!supportedMediaTypes.includes(mediaType)) {
                throw new Error(
                    `Media type ${mediaType} is not supported for requested resource`,
                );
            }

            return mediaType;
        });

        return fieldValueParts.join(', ');
    }

    /**
     * Builds an accept header field value for HTTP GET multipart request
     * messages.  Will throw an exception if no media types are found which are acceptable,
     * but will only log a verbose level message when types are specified which are
     * not acceptable.  This allows requesting several types with having to know
     * whether they are all acceptable or not.
     *
     * @param {Object[]} mediaTypes - Acceptable media types
     * @param {Object[]} supportedMediaTypes - Supported media types
     * @private
     */
    static _buildMultipartAcceptHeaderFieldValue(
        mediaTypes,
        supportedMediaTypes,
    ) {
        if (!Array.isArray(mediaTypes)) {
            throw new Error('Acceptable media types must be provided as an Array');
        }

        if (!Array.isArray(supportedMediaTypes) && !isObject(supportedMediaTypes)) {
            throw new Error(
                'Supported media types must be provided as an Array or an Object',
            );
        }

        const fieldValueParts = [];

        mediaTypes.forEach(item => {
            const { transferSyntaxUID, mediaType } = item;
            DICOMwebClient._assertMediaTypeIsValid(mediaType);
            let fieldValue = `multipart/related; type="${mediaType}"`;

            if (isObject(supportedMediaTypes)) {
                // SupportedMediaTypes is a lookup table that maps Transfer Syntax UID
                // to one or more Media Types
                if (
                    !Object.values(supportedMediaTypes)
                        .flat(1)
                        .includes(mediaType)
                ) {
                    if (!mediaType.endsWith('/*') || !mediaType.endsWith('/')) {
                        debugLog(
                            `Media type ${mediaType} is not supported for requested resource`,
                        );
                        return;
                    }
                }

                if (transferSyntaxUID) {
                    if (transferSyntaxUID !== '*') {
                        if (!Object.keys(supportedMediaTypes).includes(transferSyntaxUID)) {
                            throw new Error(
                                `Transfer syntax ${transferSyntaxUID} is not supported for requested resource`,
                            );
                        }

                        const expectedMediaTypes = supportedMediaTypes[transferSyntaxUID];

                        if (!expectedMediaTypes.includes(mediaType)) {
                            const actualType = DICOMwebClient._parseMediaType(mediaType)[0];
                            expectedMediaTypes.map(expectedMediaType => {
                                const expectedType = DICOMwebClient._parseMediaType(
                                    expectedMediaType,
                                )[0];
                                const haveSameType = actualType === expectedType;

                                if (
                                    haveSameType &&
                                    (mediaType.endsWith('/*') || mediaType.endsWith('/'))
                                ) {
                                    return;
                                }

                                throw new Error(
                                    `Transfer syntax ${transferSyntaxUID} is not supported for requested resource`,
                                );
                            });
                        }
                    }

                    fieldValue += `; transfer-syntax=${transferSyntaxUID}`;
                }
            } else if (
                Array.isArray(supportedMediaTypes) &&
                !supportedMediaTypes.includes(mediaType)
            ) {
                if (this.verbose) {
                    console.warn(
                        `Media type ${mediaType} is not supported for requested resource`,
                    );
                }
                return;
            }

            fieldValueParts.push(fieldValue);
        });

        if (!fieldValueParts.length) {
            throw new Error(`No acceptable media types found among ${JSON.stringify(mediaTypes)}`);
        }

        return fieldValueParts.join(', ');
    }

    /**
     * Builds a range header field value for HTTP GET request messages.
     *
     * @param {Array} byteRange - Start and end of byte range
     * @returns {String} Range header field value
     * @private
     */
    static _buildRangeHeaderFieldValue(byteRange = []) {
        if (byteRange.length === 1) {
            return `bytes=${byteRange[0]}-`;
        }
        if (byteRange.length === 2) {
            return `bytes=${byteRange[0]}-${byteRange[1]}`;
        }

        return 'bytes=0-';
    }

    /**
     * Gets types that are shared among acceptable media types.
     *
     * @param {Object[]} mediaTypes - Acceptable media types and optionally the UIDs of the
     corresponding transfer syntaxes
     * @private
     * @returns {String[]} Types that are shared among acceptable media types
     */
    static _getSharedMediaTypes(mediaTypes) {
        const types = new Set();

        if (!mediaTypes || !mediaTypes.length) {
            return types;
        }

        mediaTypes.forEach(item => {
            const { mediaType } = item;
            const type = DICOMwebClient._parseMediaType(mediaType)[0];
            types.add(`${type}/`);
        });

        return Array.from(types);
    }

    /**
     * Gets common base type of acceptable media types and asserts that only
     one type is specified. For example, ``("image/jpeg", "image/jp2")``
     will pass, but ``("image/jpeg", "video/mpeg2")`` will raise an
     exception.
     *
     * @param {Object[]} mediaTypes - Acceptable media types and optionally the UIDs of the
     corresponding transfer syntaxes
     * @private
     * @returns {String[]} Common media type, eg `image/` for the above example.
     */
    static _getCommonMediaType(mediaTypes) {
        if (!mediaTypes || !mediaTypes.length) {
            throw new Error('No acceptable media types provided');
        }

        const sharedMediaTypes = DICOMwebClient._getSharedMediaTypes(mediaTypes);
        if (sharedMediaTypes.length === 0) {
            throw new Error('No common acceptable media type could be identified.');
        } else if (sharedMediaTypes.length > 1) {
            throw new Error('Acceptable media types must have the same type.');
        }

        return sharedMediaTypes[0];
    }

    /**
     * Searches for DICOM studies.
     *
     * @param {Object} options
     * @param {Object} [options.queryParams] - HTTP query parameters
     * @return {Object[]} Study representations (http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.7.html#table_6.7.1-2)
     */
    searchForStudies(options = {}) {
        debugLog('search for studies');
        let withCredentials = false;
        let url = `${this.qidoURL}/studies`;
        if ('queryParams' in options) {
            url += DICOMwebClient._parseQueryParameters(options.queryParams);
        }
        if ('withCredentials' in options) {
            if (options.withCredentials) {
                withCredentials = options.withCredentials;
            }
        }
        return this._httpGetApplicationJson(url, {}, false, withCredentials);
    }

    /**
     * Retrieves metadata for a DICOM study.
     *
     * @param {Object} options
     * @param {String} options.studyInstanceUID - Study Instance UID
     * @returns {Promise<InstanceMetadata[]>} Metadata elements in DICOM JSON format for each instance
                        belonging to the study
     */
    retrieveStudyMetadata(options) {
        if (!('studyInstanceUID' in options)) {
            throw new Error(
                'Study Instance UID is required for retrieval of study metadata',
            );
        }
        debugLog(`retrieve metadata of study ${options.studyInstanceUID}`);
        const url = `${this.wadoURL}/studies/${options.studyInstanceUID}/metadata`;
        let withCredentials = false;
        if ('withCredentials' in options) {
            if (options.withCredentials) {
                withCredentials = options.withCredentials;
            }
        }
        return this._httpGetApplicationJson(url, {}, false, withCredentials);
    }

    /**
     * Searches for DICOM series.
     *
     * @param {Object} options
     * @param {Object} [options.studyInstanceUID] - Study Instance UID
     * @param {Object} [options.queryParams] - HTTP query parameters
     * @returns {Object[]} Series representations (http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.7.html#table_6.7.1-2a)
     */
    searchForSeries(options = {}) {
        let url = this.qidoURL;
        if ('studyInstanceUID' in options) {
            debugLog(`search series of study ${options.studyInstanceUID}`);
            url += `/studies/${options.studyInstanceUID}`;
        }
        url += '/series';
        if ('queryParams' in options) {
            url += DICOMwebClient._parseQueryParameters(options.queryParams);
        }
        let withCredentials = false;
        if ('withCredentials' in options) {
            if (options.withCredentials) {
                withCredentials = options.withCredentials;
            }
        }
        return this._httpGetApplicationJson(url, {}, false, withCredentials);
    }

    /**
     * Retrieves metadata for a DICOM series.
     *
     * @param {Object} options
     * @param {String} options.studyInstanceUID - Study Instance UID
     * @param {String} options.seriesInstanceUID - Series Instance UID
     * @returns {Promise<InstanceMetadata[]>} Metadata elements in DICOM JSON format for each instance
                        belonging to the series
     */
    retrieveSeriesMetadata(options) {
        if (!('studyInstanceUID' in options)) {
            throw new Error(
                'Study Instance UID is required for retrieval of series metadata',
            );
        }
        if (!('seriesInstanceUID' in options)) {
            throw new Error(
                'Series Instance UID is required for retrieval of series metadata',
            );
        }

        debugLog(`retrieve metadata of series ${options.seriesInstanceUID}`);
        const url = `${this.wadoURL}/studies/${options.studyInstanceUID}/series/${options.seriesInstanceUID}/metadata`;
        let withCredentials = false;
        if ('withCredentials' in options) {
            if (options.withCredentials) {
                withCredentials = options.withCredentials;
            }
        }
        return this._httpGetApplicationJson(url, {}, false, withCredentials);
    }

    /**
     * Searches for DICOM Instances.
     *
     * @param {Object} options
     * @param {String} [options.studyInstanceUID] - Study Instance UID
     * @param {String} [options.seriesInstanceUID] - Series Instance UID
     * @param {Object} [options.queryParams] - HTTP query parameters
     * @returns {Object[]} Instance representations (http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.7.html#table_6.7.1-2b)
     */
    searchForInstances(options = {}) {
        let url = this.qidoURL;
        let withCredentials = false;
        if ('studyInstanceUID' in options) {
            url += `/studies/${options.studyInstanceUID}`;
            if ('seriesInstanceUID' in options) {
                debugLog(
                    `search for instances of series ${options.seriesInstanceUID}`,
                );
                url += `/series/${options.seriesInstanceUID}`;
            } else {
                debugLog(
                    `search for instances of study ${options.studyInstanceUID}`,
                );
            }
        } else {
            debugLog('search for instances');
        }
        url += '/instances';
        if ('queryParams' in options) {
            url += DICOMwebClient._parseQueryParameters(options.queryParams);
        }
        if ('withCredentials' in options) {
            if (options.withCredentials) {
                withCredentials = options.withCredentials;
            }
        }
        return this._httpGetApplicationJson(url, {}, false, withCredentials);
    }

    /** Returns a WADO-URI URL for an instance
     *
     * @param {Object} options
     * @param {String} options.studyInstanceUID - Study Instance UID
     * @param {String} options.seriesInstanceUID - Series Instance UID
     * @param {String} options.sopInstanceUID - SOP Instance UID
     * @returns {String} WADO-URI URL
     */
    buildInstanceWadoURIUrl(options) {
        if (!('studyInstanceUID' in options)) {
            throw new Error('Study Instance UID is required.');
        }
        if (!('seriesInstanceUID' in options)) {
            throw new Error('Series Instance UID is required.');
        }
        if (!('sopInstanceUID' in options)) {
            throw new Error('SOP Instance UID is required.');
        }

        const contentType = options.contentType || MEDIATYPES.DICOM;
        const transferSyntax = options.transferSyntax || '*';
        const params = [];

        params.push('requestType=WADO');
        params.push(`studyUID=${options.studyInstanceUID}`);
        params.push(`seriesUID=${options.seriesInstanceUID}`);
        params.push(`objectUID=${options.sopInstanceUID}`);
        params.push(`contentType=${contentType}`);
        params.push(`transferSyntax=${transferSyntax}`);

        const paramString = params.join('&');

        return `${this.wadoURL}?${paramString}`;
    }

    /**
     * Retrieves metadata for a DICOM Instance.
     *
     * @param {Object} options object
     * @param {String} options.studyInstanceUID - Study Instance UID
     * @param {String} options.seriesInstanceUID - Series Instance UID
     * @param {String} options.sopInstanceUID - SOP Instance UID
     * @returns {Promise<InstanceMetadata>} metadata elements in DICOM JSON format
     */
    retrieveInstanceMetadata(options) {
        if (!('studyInstanceUID' in options)) {
            throw new Error(
                'Study Instance UID is required for retrieval of instance metadata',
            );
        }
        if (!('seriesInstanceUID' in options)) {
            throw new Error(
                'Series Instance UID is required for retrieval of instance metadata',
            );
        }
        if (!('sopInstanceUID' in options)) {
            throw new Error(
                'SOP Instance UID is required for retrieval of instance metadata',
            );
        }
        debugLog(`retrieve metadata of instance ${options.sopInstanceUID}`);
        const url = `${this.wadoURL}/studies/${options.studyInstanceUID}/series/${options.seriesInstanceUID}/instances/${options.sopInstanceUID}/metadata`;
        let withCredentials = false;
        if ('withCredentials' in options) {
            if (options.withCredentials) {
                withCredentials = options.withCredentials;
            }
        }
        return this._httpGetApplicationJson(url, {}, false, withCredentials);
    }

    /**
     * Retrieves frames for a DICOM Instance.
     * @param {Object} options options object
     * @param {String} options.studyInstanceUID - Study Instance UID
     * @param {String} options.seriesInstanceUID - Series Instance UID
     * @param {String} options.sopInstanceUID - SOP Instance UID
     * @param {String} options.frameNumbers - One-based indices of Frame Items
     * @returns {Array} frame items as byte arrays of the pixel data element
     */
    retrieveInstanceFrames(options) {
        if (!('studyInstanceUID' in options)) {
            throw new Error(
                'Study Instance UID is required for retrieval of instance frames',
            );
        }
        if (!('seriesInstanceUID' in options)) {
            throw new Error(
                'Series Instance UID is required for retrieval of instance frames',
            );
        }
        if (!('sopInstanceUID' in options)) {
            throw new Error(
                'SOP Instance UID is required for retrieval of instance frames',
            );
        }
        if (!('frameNumbers' in options)) {
            throw new Error(
                'frame numbers are required for retrieval of instance frames',
            );
        }
        debugLog(
            `retrieve frames ${options.frameNumbers.toString()} of instance ${options.sopInstanceUID
            }`,
        );
        const url = `${this.wadoURL}/studies/${options.studyInstanceUID}/series/${options.seriesInstanceUID
            }/instances/${options.sopInstanceUID
            }/frames/${options.frameNumbers.toString()}`;

        const { mediaTypes } = options;
        let withCredentials = false;
        if ('withCredentials' in options) {
            if (options.withCredentials) {
                withCredentials = options.withCredentials;
            }
        }

        let progressCallback = false;
        if ('progressCallback' in options) {
            progressCallback = options.progressCallback;
        }

        if (!mediaTypes) {
            return this._httpGetMultipartApplicationOctetStream(
                url,
                false,
                false,
                false,
                progressCallback,
                withCredentials,
            );
        }

        const sharedMediaTypes = DICOMwebClient._getSharedMediaTypes(mediaTypes);
        if (sharedMediaTypes.length > 1) {
            /**
             * Enable request of frames that are stored either compressed
             * (image/* media type) or uncompressed (application/octet-stream
             * media type).
             */
            const supportedMediaTypes = {
                '1.2.840.10008.1.2.1': ['application/octet-stream'],
                '1.2.840.10008.1.2.5': ['image/x-dicom-rle'],
                '1.2.840.10008.1.2.4.50': ['image/jpeg'],
                '1.2.840.10008.1.2.4.51': ['image/jpeg'],
                '1.2.840.10008.1.2.4.57': ['image/jpeg'],
                '1.2.840.10008.1.2.4.70': ['image/jpeg'],
                '1.2.840.10008.1.2.4.80': ['image/x-jls', 'image/jls'],
                '1.2.840.10008.1.2.4.81': ['image/x-jls', 'image/jls'],
                '1.2.840.10008.1.2.4.90': ['image/jp2'],
                '1.2.840.10008.1.2.4.91': ['image/jp2'],
                '1.2.840.10008.1.2.4.92': ['image/jpx'],
                '1.2.840.10008.1.2.4.93': ['image/jpx'],
                '1.2.840.10008.1.2.4.201': ['image/jhc'],
                '1.2.840.10008.1.2.4.202': ['image/jhc'],
            };

            const headers = {
                Accept: DICOMwebClient._buildMultipartAcceptHeaderFieldValue(
                    mediaTypes,
                    supportedMediaTypes,
                ),
            };
            return this._httpGet(url, headers, 'arraybuffer', progressCallback, withCredentials);
        }

        const commonMediaType = DICOMwebClient._getCommonMediaType(mediaTypes);

        if (commonMediaType.startsWith('application')) {
            return this._httpGetMultipartApplicationOctetStream(
                url,
                mediaTypes,
                false,
                false,
                progressCallback,
                withCredentials,
            );
        }
        if (commonMediaType.startsWith('image')) {
            return this._httpGetMultipartImage(
                url,
                mediaTypes,
                false,
                false,
                false,
                progressCallback,
                withCredentials,
            );
        }
        if (commonMediaType.startsWith('video')) {
            return this._httpGetMultipartVideo(
                url,
                mediaTypes,
                false,
                false,
                false,
                progressCallback,
                withCredentials,
            );
        }

        throw new Error(
            `Media type ${commonMediaType} is not supported for retrieval of frames.`,
        );
    }

    /**
    * Element in mediaTypes parameter
    * @typedef {Object} MediaType
    * @param {String} [MediaType.mediaType] - ie 'image/jpeg', 'image/png'...
    */

    /**
     * Retrieves an individual, server-side rendered DICOM Instance.
     *
     * @param {Object} options
     * @param {String} options.studyInstanceUID - Study Instance UID
     * @param {String} options.seriesInstanceUID - Series Instance UID
     * @param {String} options.sopInstanceUID - SOP Instance UID
     * @param {MediaType[]} [options.mediaTypes] - Acceptable HTTP media types
     * @param {Object} [options.queryParams] - HTTP query parameters
     * @returns {Promise<ArrayBuffer>} Rendered DICOM Instance
     */
    retrieveInstanceRendered(options) {
        if (!('studyInstanceUID' in options)) {
            throw new Error(
                'Study Instance UID is required for retrieval of rendered instance',
            );
        }
        if (!('seriesInstanceUID' in options)) {
            throw new Error(
                'Series Instance UID is required for retrieval of rendered instance',
            );
        }
        if (!('sopInstanceUID' in options)) {
            throw new Error(
                'SOP Instance UID is required for retrieval of rendered instance',
            );
        }

        let url = `${this.wadoURL}/studies/${options.studyInstanceUID}/series/${options.seriesInstanceUID}/instances/${options.sopInstanceUID}/rendered`;

        const { mediaTypes, queryParams } = options;
        const headers = {};
        let withCredentials = false;
        if ('withCredentials' in options) {
            if (options.withCredentials) {
                withCredentials = options.withCredentials;
            }
        }

        let progressCallback = false;
        if ('progressCallback' in options) {
            progressCallback = options.progressCallback;
        }

        if (!mediaTypes) {
            const responseType = 'arraybuffer';
            if (queryParams) {
                url += DICOMwebClient._parseQueryParameters(queryParams);
            }
            return this._httpGet(
                url,
                headers,
                responseType,
                progressCallback,
                withCredentials,
            );
        }

        const commonMediaType = DICOMwebClient._getCommonMediaType(mediaTypes);
        if (commonMediaType.startsWith('image')) {
            return this._httpGetImage(
                url,
                mediaTypes,
                queryParams,
                progressCallback,
                withCredentials,
            );
        }
        if (commonMediaType.startsWith('video')) {
            return this._httpGetVideo(
                url,
                mediaTypes,
                queryParams,
                progressCallback,
                withCredentials,
            );
        }
        if (commonMediaType.startsWith('text')) {
            return this._httpGetText(
                url,
                mediaTypes,
                queryParams,
                progressCallback,
                withCredentials,
            );
        }
        if (commonMediaType === MEDIATYPES.PDF) {
            return this._httpGetApplicationPdf(
                url,
                queryParams,
                progressCallback,
                withCredentials,
            );
        }

        throw new Error(
            `Media type ${commonMediaType} is not supported ` +
            'for retrieval of rendered instance.',
        );
    }

    /**
     * Retrieves a thumbnail of an DICOM Instance.
     *
     * @param {Object} options
     * @param {String} options.studyInstanceUID - Study Instance UID
     * @param {String} options.seriesInstanceUID - Series Instance UID
     * @param {String} options.sopInstanceUID - SOP Instance UID
     * @param {MediaType[]} [options.mediaTypes] - Acceptable HTTP media types
     * @param {Object} [options.queryParams] - HTTP query parameters
     * @returns {ArrayBuffer} Thumbnail
     */
    retrieveInstanceThumbnail(options) {
        if (!('studyInstanceUID' in options)) {
            throw new Error(
                'Study Instance UID is required for retrieval of rendered instance',
            );
        }
        if (!('seriesInstanceUID' in options)) {
            throw new Error(
                'Series Instance UID is required for retrieval of rendered instance',
            );
        }
        if (!('sopInstanceUID' in options)) {
            throw new Error(
                'SOP Instance UID is required for retrieval of rendered instance',
            );
        }

        let url = `${this.wadoURL}/studies/${options.studyInstanceUID}/series/${options.seriesInstanceUID}/instances/${options.sopInstanceUID}/thumbnail`;

        const { mediaTypes, queryParams } = options;
        const headers = {};
        let withCredentials = false;
        if ('withCredentials' in options) {
            if (options.withCredentials) {
                withCredentials = options.withCredentials;
            }
        }

        let progressCallback = false;
        if ('progressCallback' in options) {
            progressCallback = options.progressCallback;
        }

        if (!mediaTypes) {
            const responseType = 'arraybuffer';
            if (queryParams) {
                url += DICOMwebClient._parseQueryParameters(queryParams);
            }
            return this._httpGet(
                url,
                headers,
                responseType,
                progressCallback,
                withCredentials,
            );
        }

        const commonMediaType = DICOMwebClient._getCommonMediaType(mediaTypes);
        if (commonMediaType.startsWith('image')) {
            return this._httpGetImage(
                url,
                mediaTypes,
                queryParams,
                progressCallback,
                withCredentials,
            );
        }

        throw new Error(
            `Media type ${commonMediaType} is not supported ` +
            'for retrieval of rendered instance.',
        );
    }

    /**
     * Retrieves rendered frames for a DICOM Instance.
     *
     * @param {Object} options
     * @param {String} options.studyInstanceUID - Study Instance UID
     * @param {String} options.seriesInstanceUID - Series Instance UID
     * @param {String} options.sopInstanceUID - SOP Instance UID
     * @param {String} options.frameNumbers - One-based indices of Frame Items
     * @param {MediaType[]} [options.mediaTypes] - Acceptable HTTP media types
     * @param {Object} [options.queryParams] - HTTP query parameters
     * @returns {ArrayBuffer[]} Rendered Frame Items as byte arrays
     */
    retrieveInstanceFramesRendered(options) {
        if (!('studyInstanceUID' in options)) {
            throw new Error(
                'Study Instance UID is required for retrieval of rendered instance frames',
            );
        }
        if (!('seriesInstanceUID' in options)) {
            throw new Error(
                'Series Instance UID is required for retrieval of rendered instance frames',
            );
        }
        if (!('sopInstanceUID' in options)) {
            throw new Error(
                'SOP Instance UID is required for retrieval of rendered instance frames',
            );
        }
        if (!('frameNumbers' in options)) {
            throw new Error(
                'frame numbers are required for retrieval of rendered instance frames',
            );
        }

        debugLog(
            `retrieve rendered frames ${options.frameNumbers.toString()} of instance ${options.sopInstanceUID
            }`,
        );
        let url = `${this.wadoURL}/studies/${options.studyInstanceUID}/series/${options.seriesInstanceUID
            }/instances/${options.sopInstanceUID
            }/frames/${options.frameNumbers.toString()}/rendered`;

        const { mediaTypes, queryParams } = options;
        const headers = {};
        let withCredentials = false;
        if ('withCredentials' in options) {
            if (options.withCredentials) {
                withCredentials = options.withCredentials;
            }
        }
        let progressCallback = false;
        if ('progressCallback' in options) {
            progressCallback = options.progressCallback;
        }

        if (!mediaTypes) {
            const responseType = 'arraybuffer';
            if (queryParams) {
                url += DICOMwebClient._parseQueryParameters(queryParams);
            }
            return this._httpGet(url, headers, responseType, false, withCredentials);
        }

        const commonMediaType = DICOMwebClient._getCommonMediaType(mediaTypes);
        if (commonMediaType.startsWith('image')) {
            return this._httpGetImage(
                url,
                mediaTypes,
                queryParams,
                progressCallback,
                withCredentials,
            );
        }
        if (commonMediaType.startsWith('video')) {
            return this._httpGetVideo(
                url,
                mediaTypes,
                queryParams,
                progressCallback,
                withCredentials,
            );
        }

        throw new Error(
            `Media type ${commonMediaType} is not supported ` +
            'for retrieval of rendered frame.',
        );
    }

    /**
     * Retrieves thumbnail of frames for a DICOM Instance.
     *
     * @param {Object} options
     * @param {String} options.studyInstanceUID - Study Instance UID
     * @param {String} options.seriesInstanceUID - Series Instance UID
     * @param {String} options.sopInstanceUID - SOP Instance UID
     * @param {String} options.frameNumbers - One-based indices of Frame Items
     * @param {Object} [options.queryParams] - HTTP query parameters
     * @returns {ArrayBuffer[]} Rendered Frame Items as byte arrays
     */
    retrieveInstanceFramesThumbnail(options) {
        if (!('studyInstanceUID' in options)) {
            throw new Error(
                'Study Instance UID is required for retrieval of rendered instance frames',
            );
        }
        if (!('seriesInstanceUID' in options)) {
            throw new Error(
                'Series Instance UID is required for retrieval of rendered instance frames',
            );
        }
        if (!('sopInstanceUID' in options)) {
            throw new Error(
                'SOP Instance UID is required for retrieval of rendered instance frames',
            );
        }
        if (!('frameNumbers' in options)) {
            throw new Error(
                'frame numbers are required for retrieval of rendered instance frames',
            );
        }

        console.debug(
            `retrieve rendered frames ${options.frameNumbers.toString()} of instance ${options.sopInstanceUID
            }`,
        );
        let url = `${this.wadoURL}/studies/${options.studyInstanceUID}/series/${options.seriesInstanceUID
            }/instances/${options.sopInstanceUID
            }/frames/${options.frameNumbers.toString()}/thumbnail`;

        const { mediaTypes, queryParams } = options;
        const headers = {};
        let withCredentials = false;
        if ('withCredentials' in options) {
            if (options.withCredentials) {
                withCredentials = options.withCredentials;
            }
        }

        let progressCallback = false;
        if ('progressCallback' in options) {
            progressCallback = options.progressCallback;
        }

        if (!mediaTypes) {
            const responseType = 'arraybuffer';
            if (queryParams) {
                url += DICOMwebClient._parseQueryParameters(queryParams);
            }
            return this._httpGet(
                url,
                headers,
                responseType,
                progressCallback,
                withCredentials,
            );
        }

        const commonMediaType = DICOMwebClient._getCommonMediaType(mediaTypes);
        if (commonMediaType.startsWith('image')) {
            return this._httpGetImage(
                url,
                mediaTypes,
                queryParams,
                progressCallback,
                withCredentials,
            );
        }

        throw new Error(
            `Media type ${commonMediaType} is not supported ` +
            'for retrieval of rendered frame.',
        );
    }

    /**
     * Retrieves a DICOM Instance.
     *
     * @param {Object} options
     * @param {String} options.studyInstanceUID - Study Instance UID
     * @param {String} options.seriesInstanceUID - Series Instance UID
     * @param {String} options.sopInstanceUID - SOP Instance UID
     * @returns {Promise<ArrayBuffer>} DICOM Part 10 file as Arraybuffer
     */
    retrieveInstance(options) {
        if (!('studyInstanceUID' in options)) {
            throw new Error('Study Instance UID is required');
        }
        if (!('seriesInstanceUID' in options)) {
            throw new Error('Series Instance UID is required');
        }
        if (!('sopInstanceUID' in options)) {
            throw new Error('SOP Instance UID is required');
        }
        const url = `${this.wadoURL}/studies/${options.studyInstanceUID}/series/${options.seriesInstanceUID}/instances/${options.sopInstanceUID}`;

        const { mediaTypes } = options;
        const { withCredentials = false } = options;
        const { progressCallback = false } = options;

        if (!mediaTypes) {
            return this._httpGetMultipartApplicationDicom(
                url,
                false,
                false,
                progressCallback,
                withCredentials,
            ).then(getFirstResult);
        }

        const commonMediaType = DICOMwebClient._getCommonMediaType(mediaTypes);
        if (commonMediaType === MEDIATYPES.DICOM) {
            return this._httpGetMultipartApplicationDicom(
                url,
                mediaTypes,
                false,
                progressCallback,
                withCredentials,
            ).then(getFirstResult);
        }

        throw new Error(
            `Media type ${commonMediaType} is not supported for retrieval of instance.`,
        );
    }

    /**
     * Retrieves all DICOM Instances of a Series.
     *
     * @param {Object} options
     * @param {String} options.studyInstanceUID - Study Instance UID
     * @param {String} options.seriesInstanceUID - Series Instance UID
     * @param {Function} options.progressCallback
     * @returns {Promise<ArrayBuffer[]>} DICOM Instances
     */
    retrieveSeries(options) {
        if (!('studyInstanceUID' in options)) {
            throw new Error('Study Instance UID is required');
        }
        if (!('seriesInstanceUID' in options)) {
            throw new Error('Series Instance UID is required');
        }

        const url = `${this.wadoURL}/studies/${options.studyInstanceUID}/series/${options.seriesInstanceUID}`;

        const { mediaTypes } = options;
        let withCredentials = false;
        if ('withCredentials' in options) {
            if (options.withCredentials) {
                withCredentials = options.withCredentials;
            }
        }

        let progressCallback = false;
        if ('progressCallback' in options) {
            progressCallback = options.progressCallback;
        }

        if (!mediaTypes) {
            return this._httpGetMultipartApplicationDicom(
                url,
                false,
                false,
                progressCallback,
                withCredentials,
            );
        }

        const commonMediaType = DICOMwebClient._getCommonMediaType(mediaTypes);
        if (commonMediaType === MEDIATYPES.DICOM) {
            return this._httpGetMultipartApplicationDicom(
                url,
                mediaTypes,
                false,
                progressCallback,
                withCredentials,
            );
        }

        throw new Error(
            `Media type ${commonMediaType} is not supported for retrieval of series.`,
        );
    }

    /**
     * Retrieves all DICOM Instances of a Study.
     *
     * @param {Object} options
     * @param {String} options.studyInstanceUID - Study Instance UID
     * @returns {ArrayBuffer[]} DICOM Instances
     */
    retrieveStudy(options) {
        if (!('studyInstanceUID' in options)) {
            throw new Error('Study Instance UID is required');
        }

        const url = `${this.wadoURL}/studies/${options.studyInstanceUID}`;

        const { mediaTypes } = options;
        const { withCredentials = false } = options;
        const { progressCallback = false } = options;

        if (!mediaTypes) {
            return this._httpGetMultipartApplicationDicom(
                url,
                false,
                false,
                progressCallback,
                withCredentials,
            );
        }

        const commonMediaType = DICOMwebClient._getCommonMediaType(mediaTypes);
        if (commonMediaType === MEDIATYPES.DICOM) {
            return this._httpGetMultipartApplicationDicom(
                url,
                mediaTypes,
                false,
                progressCallback,
                withCredentials,
            );
        }

        throw new Error(
            `Media type ${commonMediaType} is not supported for retrieval of study.`,
        );
    }

    /**
     * Retrieves and parses BulkData from a BulkDataURI location.
     * Decodes the multipart encoded data and returns the resulting data
     * as an ArrayBuffer.
     *
     * See http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.5.5.html
     *
     * @param {Object} options
     * @param {string} options.BulkDataURI to retrieve
     * @param {Array}  options.mediaTypes to use to fetch the URI
     * @param {string} options.byteRange to request a sub-range (only valid on single part)
     * @returns {Promise<Array>} Bulkdata parts
     */
    retrieveBulkData(options) {
        if (!('BulkDataURI' in options)) {
            throw new Error('BulkDataURI is required.');
        }

        const url = options.BulkDataURI;
        const { mediaTypes, byteRange } = options;
        const { withCredentials = false } = options;
        const { progressCallback = false } = options;

        if (this.singlepart.indexOf('bulkdata') !== -1) {
            return this._httpGet(url, options.headers, 'arraybuffer', null, withCredentials);
        }

        if (mediaTypes) {
            try {
                const commonMediaType = DICOMwebClient._getCommonMediaType(mediaTypes);

                if (commonMediaType === 'image/') {
                    return this._httpGetMultipartImage(
                        url,
                        mediaTypes,
                        byteRange,
                        false,
                        false,
                        progressCallback,
                        withCredentials,
                    );
                }
            } catch (e) {
                // No-op - this happens sometimes if trying to fetch the specific desired type but want to fallback to octet-stream
            }
        }

        // Just use the media types provided
        return this._httpGetMultipartApplicationOctetStream(
            url,
            mediaTypes,
            byteRange,
            false,
            progressCallback,
            withCredentials,
        );
    }

    /**
     * Stores DICOM Instances.
     *
     * @param {Object} options
     * @param {ArrayBuffer[]} options.datasets - DICOM Instances in PS3.10 format
     * @param {String} [options.studyInstanceUID] - Study Instance UID
     * @param {XMLHttpRequest} [options.request] - if specified, the request to use, otherwise one will be created; useful for adding custom upload and abort listeners/objects
     * @returns {Promise} Response message
     */
    storeInstances(options) {
        if (!('datasets' in options)) {
            throw new Error('datasets are required for storing');
        }

        let url = `${this.stowURL}/studies`;
        if ('studyInstanceUID' in options) {
            url += `/${options.studyInstanceUID}`;
        }

        const { data, boundary } = multipartEncode(options.datasets);
        const headers = {
            'Content-Type': `multipart/related; type="application/dicom"; boundary="${boundary}"`,
        };
        const { withCredentials = false } = options;
        return this._httpPost(
            url,
            headers,
            data,
            options.progressCallback,
            withCredentials,
            options.request,
        );
    }


}


export { DICOMwebClient };
export default DICOMwebClient;

```
