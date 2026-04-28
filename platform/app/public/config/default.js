/** @type {AppTypes.Config} */

window.config = {
    name: 'config/default.js',
    routerBasename: '/api/protected/dicom-viewer/ohif',
    whiteLabeling: {
        createLogoComponentFn: function (React) {
            return React.createElement('div',
                {
                    className: 'text-white flex',
                },
                React.createElement('img', {
                    src: 'data:image/png;base64,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',
                    width: 30,
                    className: 'rounded'
                }),
                React.createElement('p', { className: 'uppercase pl-1 self-center' }, ''),
            );
        },
    },
    extensions: [],
    modes: [],
    customizationService: {},
    showStudyList: false,
    // some windows systems have issues with more than 3 web workers
    maxNumberOfWebWorkers: 3,
    // below flag is for performance reasons, but it might not work for all servers
    showWarningMessageForCrossOrigin: true,
    showCPUFallbackMessage: true,
    showLoadingIndicator: true,
    experimentalStudyBrowserSort: false,
    strictZSpacingForVolumeViewport: true,
    groupEnabledModesFirst: true,
    allowMultiSelectExport: false,
    maxNumRequests: {
        interaction: 100,
        thumbnail: 75,
        // Prefetch number is dependent on the http protocol. For http 2 or
        // above, the number of requests can be go a lot higher.
        prefetch: 25,
    },
    showErrorDetails: 'production', // 'always', 'dev', 'production'
    // filterQueryParam: false,
    // Defines multi-monitor layouts
    multimonitor: [
        {
            id: 'split',
            test: ({ multimonitor }) => multimonitor === 'split',
            screens: [
                {
                    id: 'ohif0',
                    screen: null,
                    location: {
                        screen: 0,
                        width: 0.5,
                        height: 1,
                        left: 0,
                        top: 0,
                    },
                    options: 'location=no,menubar=no,scrollbars=no,status=no,titlebar=no',
                },
                {
                    id: 'ohif1',
                    screen: null,
                    location: {
                        width: 0.5,
                        height: 1,
                        left: 0.5,
                        top: 0,
                    },
                    options: 'location=no,menubar=no,scrollbars=no,status=no,titlebar=no',
                },
            ],
        },

        {
            id: '2',
            test: ({ multimonitor }) => multimonitor === '2',
            screens: [
                {
                    id: 'ohif0',
                    screen: 0,
                    location: {
                        width: 1,
                        height: 1,
                        left: 0,
                        top: 0,
                    },
                    options: 'fullscreen=yes,location=no,menubar=no,scrollbars=no,status=no,titlebar=no',
                },
                {
                    id: 'ohif1',
                    screen: 1,
                    location: {
                        width: 1,
                        height: 1,
                        left: 0,
                        top: 0,
                    },
                    options: 'fullscreen=yes,location=no,menubar=no,scrollbars=no,status=no,titlebar=no',
                },
            ],
        },
    ],
    defaultDataSourceName: 'ohif',
    /* Dynamic config allows user to pass "configUrl" query string this allows to load config without recompiling application. The regex will ensure valid configuration source */
    // dangerouslyUseDynamicConfig: {
    //   enabled: true,
    //   // regex will ensure valid configuration source and default is /.*/ which matches any character. To use this, setup your own regex to choose a specific source of configuration only.
    //   // Example 1, to allow numbers and letters in an absolute or sub-path only.
    //   // regex: /(0-9A-Za-z.]+)(\/[0-9A-Za-z.]+)*/
    //   // Example 2, to restricts to either hosptial.com or othersite.com.
    //   // regex: /(https:\/\/hospital.com(\/[0-9A-Za-z.]+)*)|(https:\/\/othersite.com(\/[0-9A-Za-z.]+)*)/
    //   regex: /.*/,
    // },
    dataSources: [
        {
            namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
            sourceName: 'ohif',
            configuration: {
                friendlyName: 'AllClinic Lite',
                name: 'DCM4CHEE',
                qidoRoot: 'http://localhost:8080/api/protected/dicom-viewer/pacs/rs',
                wadoRoot: 'http://localhost:8080/api/protected/dicom-viewer/pacs/wado',
                qidoSupportsIncludeField: false,
                supportsReject: true,
                supportsStow: true,
                imageRendering: 'wadors',
                thumbnailRendering: 'wadors',
                enableStudyLazyLoad: true,
                supportsFuzzyMatching: false,
                supportsWildcard: true,
                staticWado: true,
                singlepart: 'video',
                bulkDataURI: {
                    enabled: true,
                    relativeResolution: 'studies',
                },
            },
        },
    ],
    httpErrorHandler: error => {
        // This is 429 when rejected from the public idc sandbox too often.
        console.warn(error.status);
    },
    // segmentation: {
    //   segmentLabel: {
    //     enabledByDefault: true,
    //     labelColor: [255, 255, 0, 1], // must be an array
    //     hoverTimeout: 1,
    //     background: 'rgba(100, 100, 100, 0.5)', // can be any valid css color
    //   },
    // },
    // whiteLabeling: {
    //   createLogoComponentFn: function (React) {
    //     return React.createElement(
    //       'a',
    //       {
    //         target: '_self',
    //         rel: 'noopener noreferrer',
    //         className: 'text-purple-600 line-through',
    //         href: '_X___IDC__LOGO__LINK___Y_',
    //       },
    //       React.createElement('img', {
    //         src: './Logo.svg',
    //         className: 'w-14 h-14',
    //       })
    //     );
    //   },
    // },
};
