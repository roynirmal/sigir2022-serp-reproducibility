// Configuration object for the Google SERP.

let logUIConfigurationObject = {
    logUIConfiguration: {
        endpoint: 'ws://logui.ewi.tudelft.nl/ws/endpoint/',
        authorisationToken: null,
        verbose: true, // Turn this off when the experiment is running properly! Set it to false.
    },
    applicationSpecificData: {
        userID: null, // To be overwritten by the driver script.
        serp: null,
        task: null,
    },
    browserEvents: {
        trackCursor: false,
    },
    trackingConfiguration: {
        'tab-click': {
            selector: 'header > div > ul.tabs > li a',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'click',
            name: 'TAB_LINK_CLICK',
            metadata: [
                {
                    nameForLog: 'tabName',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-tabName',
                },
            ],
        },
        'tab-hover': {
            selector: 'header > div > ul.tabs > li a',
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'TAB_LINK_HOVERIN',
                },
                mouseleave: {
                    name: 'TAB_LINK_HOVEROUT',
                }
            },
            metadata: [
                {
                    nameForLog: 'tabName',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-tabName',
                },
            ],
        },
        'next-click': {
            selector: 'header > div ul.right button',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'click',
            name: 'NEXT_CLICK'
        },
        'facts-hover': {
            selector: 'div.answer-card',
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'FACTS_HOVERIN',
                },
                mouseleave: {
                    name: 'FACTS_HOVEROUT',
                }
            },
        },
        'facts-click': {
            selector: 'div.answer-card > div.flex-container > div.left-container > a',
            event: 'click',
            name: 'FACTS_LINK_CLICK'
        },
        'image-hover': {
            selector: 'div.image-vertical ul li img',
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'IMAGE_SERP_HOVERIN',
                },
                mouseleave: {
                    name: 'IMAGE_SERP_HOVEROUT',
                }
            },
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-imageRank',
                },
            ],
        },
        'image-click': {
            selector: 'div.image-vertical ul li img',
            event: 'click',
            name: 'IMAGE_SERP_CLICK',
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-imageRank',
                },
            ],
        },
        'video-hover': {
            selector: 'div.video-vertical ul li',
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'VIDEO_SERP_HOVERIN',
                },
                mouseleave: {
                    name: 'VIDEO_SERP_HOVEROUT',
                }
            },
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-videoRank',
                },
            ],
        },
        'video-click': {
            selector: 'div.video-vertical ul li.card a h3',
            event: 'click',
            name: 'VIDEO_SERP_CLICK',
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-videoRank',
                },
            ],
        },
        'web-hover': {
            selector: 'div.result-organic',
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'WEB_RESULT_HOVERIN',
                },
                mouseleave: {
                    name: 'WEB_RESULT_HOVEROUT',
                }
            },
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-webRank',
                },
            ],
        },
        'web-snippet-hover': {
            selector: 'div.result-organic span.snippet',
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'WEB_SNIPPET_HOVERIN',
                },
                mouseleave: {
                    name: 'WEB_SNIPPET_HOVEROUT',
                }
            },
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-webRank',
                },
            ],
        },
        'web-title-hover': {
            selector: 'div.result-organic h3',
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'WEB_TITLE_HOVERIN',
                },
                mouseleave: {
                    name: 'WEB_TITLE_HOVEROUT',
                }
            },
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-webRank',
                },
            ],
        },
        'web-title-hover': {
            selector: 'div.result-organic h3',
            event: 'click',
            name: 'WEB_TITLE_CLICK',
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-webRank',
                },
            ],
        },
        'image-tab-hover': {
            selector: 'div.grid-container > div.image-grid > ul > li > a > img',
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'IMAGE_TAB_HOVERIN',
                },
                mouseleave: {
                    name: 'IMAGE_TAB_HOVEROUT',
                }
            },
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-imageRank',
                },
            ],
        },
        'image-tab-click': {
            selector: 'div.grid-container > div.image-grid > ul > li > a > img',
            event: 'click',
            name: 'IMAGE_TAB_CLICK',
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-imageRank',
                },
            ],
        },
        'image-tab-link-click': {
            selector: 'div.grid-container > div.image-grid > ul > li > a > p',
            event: 'click',
            name: 'IMAGE_TAB_CLICK',
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-imageRank',
                },
            ],
        },
        'video-tab-hover': {
            selector: 'div.grid-container > div.video-grid > ul > li > iframe',
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'VIDEO_TAB_HOVERIN',
                },
                mouseleave: {
                    name: 'VIDEO_TAB_HOVEROUT',
                }
            },
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'id',
                },
            ],
        },
        // 'video-tab-click': {
        //     selector: 'div.grid-container > div.video-grid > ul > li > iframe ',
        //     event: 'onStateChange',
        //     name: 'VIDEO_TAB_CLICK',
        //     metadata: [
        //         {
        //             nameForLog: 'rank',
        //             sourcer: 'elementAttribute',
        //             lookFor: 'id',
        //         },
        //     ],
        // },
        'video-tab-link-click': {
            selector: 'div.grid-container > div.video-grid > ul > li > a > h3',
            event: 'click',
            name: 'VIDEO_TAB_CLICK',
            metadata: [
                {
                    nameForLog: 'rank',
                    sourcer: 'elementAttribute',
                    lookFor: 'data-videoRank',
                },
            ],
        }
    }
}