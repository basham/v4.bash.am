---
title: Mobile Strategies for Kuali Student
date: '2013-12-16'
---

## Executive summary

To produce future friendly web software, we must embrace both the unpredictable nature of the Internet and the increasing quantity and diversity of devices capable of accessing the Web. Responsive web design is only one technique of a fuller strategy needed to build services for not only mobile but any device. Kuali software must accommodate more than screen size and consider the context of use. While we're in the process of understanding who is using the software and what they may need to accomplish, we can't accurately predict how, where, or when they will access the software, but we can orient the software in ways that will empower it to adapt to these varied contexts.

First, we must employ techniques to enhance a basic experience according to the capabilities of the device. While we can't design for categories of devices (e.g. mobile, tablet, desktop), we can optimize as needed for specific devices.

Second, we must rigorously set and implement accessibility standards to assist those with blindness, color blindness, low vision, deafness, motor disabilities, and cognitive disabilities. Such accommodations provides enormous gains even for those not experiencing disabilities.

Third, we must consider performance as an ongoing and intentional process. Choosing the right tools and employing appropriate techniques must be designed from the beginning and questioned throughout.

Fourth, we must carefully structure data and its means of delivery so it can be flexibly and easily accessed on any future system, not just the applications within our immediate concern.

## Recommendations

1. **Design simple to complex.**  
We shouldn't first design for the best case scenario, in which every device features the latest and greatest capabilities, then figure out how to gracefully degrade the design for the sake of lesser devices. Instead, we must first design a baseline experience that is usable by all, then enhance that experience as capabilities allow. For Kuali Student, we recommend the baseline to consist of the following:

  * Minimum screen resolution of 320&times;480 pixels.
  * JavaScript must be enabled.

2. **Build one app, not multiple.**  
It is unsustainable to build and maintain multiple versions of the same app, each intended for specific categories of devices, such as mobile, tablet, and desktop. A single web app and its critical features should be usable by any minimally capable device. Supplemental features should be conditionally initiated. Initiated features should be conditionally enhanced.

3. **Adhere to WAI-ARIA standards.**  
HTML should be enhanced according to WAI-ARIA standards as the means toward making the app more readable and accessible to those using screen readers and other assistive devices. The interface should be fully usable with only a keyboard.

4. **Serve data via REST web services.**  
Services should be expressed as a REST web service, consumable in the JSON format, supplementing the current SOAP service used for Java.

5. **Use the best tool for the job.**  
We should support a workflow that allows tools to be critically evaluated, supplemented, repurposed, or replaced as needed. The tool should be appropriate for the task and not forced to be used beyond its capabilities. Tools must be evaluated to assure they meet the needs for progressive enhancement, accessibility, performance, and web services. Some tools to be evaluated include full stack frameworks (e.g. [KRAD](http://www.kuali.org/rice/modules/krad)), JavaScript frameworks (e.g. [AngularJS](http://angularjs.org), [Ember.js](http://emberjs.com), [Backbone.js](http://backbonejs.org)), JavaScript libraries (e.g. [jQuery](http://jquery.com)), CSS frameworks (e.g. [Bootstrap](http://getbootstrap.com), [Foundation](http://foundation.zurb.com)), CSS preprocessors (e.g. [LESS](http://lesscss.org), [Sass](http://sass-lang.com)), etc.

## Research & Rationale

Responsive web design (RWD) has been used as a buzzword within the Kuali community as a way to communicate a desire to align Kuali's front-end interface strategies with the growing expectations of our users and other stakeholders. While responsive web design is becoming a fundamental tactic, it is but one piece of a larger strategy that Kuali must consider. We must reframe our concern toward delivering the best user experience, regardless of how, when, where, or why the user accesses Kuali products.

### Responsive web design

According to Ethan Marcotte, who coined the term in his book [<cite>Responsive Web Design</cite> (2011)](http://www.abookapart.com/products/responsive-web-design), responsive web design is a means toward serving the same content across any screen resolution. Technologically, it's composed of flexible grids, flexible media, and media queries. Layout, positioning, and typography should use relative units. Images, graphics, and video should scale and not accidentally bleed from its respective containers. Styles can be dynamically altered according to the viewport size, pixel density, and other device screen features. By dynamically optimizing the structure and presentation of content, RWD provides enormous gains for the user experience in terms of readability, focus, and consistency.

A responsive strategy is significantly more cost effective to do so at the very beginning of a product, rather than apply it well into its lifecycle. While there is more design and implementation overhead at the start, the investment of a little more work equates to a better experience for the entire spectrum of users, rather than a targeted percentage.

While RWD is a more obvious strategy for informational websites, such as blogs and news sites, it becomes increasingly muddled when the content is data, in the form of a web application. Two years into its conception, much of the web design community is struggling to learn how responsive strategies apply to web applications. Academically, there is a tremendous amount of patterns and principles to be refined by both Kuali and the larger web design community to understand how components, such as tabs, popups, menus, tooltips, etc., scale and behave in these changing device environments. Practically, it's becoming apparent that accommodating variable viewport sizes can't be the sole consideration toward a mobile strategy.

### Mobile first

Historically, Kuali and most vendors have produced software with the desktop experience as the primary concern. The desktop interface would be designed first, then at some later iteration, when it was determined that targeting mobile would be a sensible business strategy, the interface would be whittled down to fit on smaller devices, often devoid of non-critical features. This mobile-afterward approach belittles the experience on mobile, relegating that interface as a second-class citizen.

A similar mobile-also approach is noticeable within both Google and GitHub, as simple examples. Google provides both mobile- and desktop-optimized clients of its Calendar, Gmail, and Drive web services. They smartly assume which experience is best for the user, without restricting the user from switching to a sibling interface. This summer, GitHub published a mobilized website, sacrificing features and interactivity for the sake of highly performant content viewing. Marcotte even admits that adhering to responsive strategies may not be sensible if there's a compelling reason to separate, say, the mobile experience from the desktop experience. While Google, GitHub, and others have answered Marcotte's question and chose to partition their product streams, Kuali may not be able to answer it immediately, without some trial-and-error.

A better strategy is a mobile-first approach, as defined by Luke Wroblewski in his book [<cite>Mobile First</cite> (2011)](http://www.abookapart.com/products/mobile-first). First, by considering the mobile experience at the outset, the interface is intentionally accessible to a wider audience. Second, mobile-first forces better focus on the content, content structure, and functionality, which can have the added benefit of more efficient code and refined performance. Third, innovation and richer designs are more likely when new technologies, such as touch gestures and location awareness, are available.

However, the mantra of mobile-first should be taken with some caveats. The understated goal of this philosophy is to create a foundation on which the user experience on any device is considered and well intentioned. The philosophy's purposeful focus on  "mobile" is merely a means to apply the philosophy to a common artifact, as a way to calibrate the web design process around the capabilities of devices and the experience of the users on those devices.

If we design interfaces only according to the common device types (e.g. mobile, tablet, netbook, laptop, desktop), then we risk assuming too much or too little about what each category affords, and we will be forced to constantly reevaluate their respective meanings as new devices are adopted. By stereotyping about the abilities of each category, we will most likely universally misjudge what each device can really do. Nevertheless, the richest user experience will only be achieved by tailoring an interface to each particular device. While developing native applications for iOS, Android, and Windows Phone in addition to the web interface is too resource intensive for Kuali, we can still leverage the most economical gains by smartly focusing on the web interface.

Particularly, we should tailor user interfaces according to the individual [capabilities that any device has or could have](http://www.w3.org/Mobile/mobile-web-app-state/). Currently, we can detect widely deployed capabilities, such as screen resolution, color depth, touch events, geolocation, motion sensors (e.g. gyroscope, accelerometer, compass), offline storage, advanced input forms (e.g. date, time, telephone, email, URL), push requests, and bi-directional connections (i.e. WebSockets). Browsers are starting to implement stable specifications for capabilities such as camera, microphone, ambient light sensing, proximity, battery status, vibration, device notifications, network state (e.g. online, offline, limited data, bandwidth), full screen, and autocomplete. Upcoming specifications are outlining capabilities for adaptive images, speech-based interactions, encrypted storage, near-field communication (NFC), messaging (e.g. email, SMS, MMS), and access to local contacts (i.e. address book). Understanding that in practice a capability is more often a gradual or partial adoption of a specification, it results in innumerable permutations, impossible to accurately reduce into classifications. We design for devices by designing for capabilities, and in this way, Kuali software becomes more [future friendly](http://alistapart.com/article/for-a-future-friendly-web).

### Progressive enhancement

By designing for device capabilities, rather than particular devices or types of devices, Kuali will have to reframe its development approach. By doing so, Kuali should determine the minimum capabilities for which its software should be designed, and by default provide that baseline experience for all users. Any capabilities above or in addition to the requirements dynamically affords a richer experience. For whatever reason, if an optional technology fails, then the interface falls back to a more simple, yet acceptable experience. For example, if it's decided that a Kuali app must work even when JavaScript is disabled, then minimally, the app should be workable within the constraints of links and form submissions; if JavaScript is available, then a broad range of interactive capabilities become possible. If the device is location-aware, then that information could be used to supplement existing features or initialize new features. If the minimum viewport size is optimized for an older-generation iPhone, then space beyond 320×480 pixels is merely a pleasantry, not a necessity. Users are rewarded with a richer user experience for more advanced capabilities, rather than punished for not adhering to a high standard.

In his book [<cite>Adaptive Web Design</cite> (2011)](http://easy-readers.net/books/adaptive-web-design/), Aaron Gustafson argues that this progressive enhancement technique is actually a means toward addressing a wider definition of accessibility. In general, software accessibility is concerned with providing a means for individuals with physical or mental disabilities to still access the same content as those without such restrictions. For example, an interface usable by keyboard is accessible to the blind and those with motor disabilities. High color contrast helps those with color blindness. Large font sizes assists readability for those with impaired vision. Captions and transcripts makes audio and video content readable by the deaf. Simple layout, consistent navigation, and well organized and well written content helps reduce confusion for those with cognitive disabilities. When designing software in consideration of all these limitations, every user gains the benefit. A usable, functional, and delightful interface with readable and understandable multi-formed content is the pinnacle desire for any user, regardless of physical or mental disabilities.

In the same way, progressive enhancement compensates for technological disabilities, and compensating for such limitations provides enormous gains for all users. Just like it doesn't matter how a person may have become blind, be it by birth, accident, altercation, disease, or voluntarily, nor does it matter the extent of the blindness, be it temporary or permanent, the most important singular fact is that the person is blind. The means or duration of the blindness shouldn't affect how an interface should behave toward the blind. In the same way, we shouldn't concern ourselves about why JavaScript is disabled or not working; what's important is that it's not working and how the interface compensates. It doesn't matter why the network connection is spotty; what matters is how we gracefully accommodate unstable connections. A usable, functional, and delightful interface is the pinnacle desire for any user, regardless of technological disabilities.

Gustafson suggests the best way to progressively enhance the user experience on the web is to work from its most foundational technological layers, before creating enhancements targeting optional capabilities. He outlines five basic layers of experience, in order of importance: text, semantics, audio-visual, interaction, and interactive accessibility.

Foremost, the web is about documents composed of text. This text exists regardless of the existence or change of any technology. At its most basic, the web should be consumable in the form of text, and it is the responsibility of copywriters to produce well written and understandable text.

Secondly, text is enhanced by HTML. These tags and attributes give meaning and context (i.e. semantics) to the base text, such as headings, sections, and emphasis. It affords simple interactivity, namely hyperlinking and form controls. Other technologies better interpret the text when it is enriched with appropriate tags and attributes.

Thirdly, HTML is enhanced with the addition of an audio-visual layer, via the application of CSS, images, audio, and video. Images should provide alternative text, in case they don't load or can't be seen. Audio and video should be dually consumable through transcripts. CSS styles the presentation of text and media for the benefit of users with eyesight.

Fourthly, HTML, CSS, and media are enhanced with interactivity, most likely powered by JavaScript, if not third-party solutions, such as Flash, Silverlight, or Java applets.

Finally, interactivity becomes enhanced and accessible to screen readers when HTML adheres to more rigorous standards, as outlined by the WAI-ARIA spec.

Each of these layers contain a range of complexities and subtleties, which need to be intimately practiced by interface developers. HTML5 tags, and new ones not yet specified, inherently provide more substantial semantics. CSS3 provides native animation and 3D transformations, which enhance simpler interfaces. JavaScript provides access to device APIs, so extra-browser capabilities can be exploited. Developers must be encouraged to experiment with these technologies, and there must be easy means for these enhancements to be integrated into Kuali workflows and codebases.

### Accessibility

Similar to how designing for categories of devices is largely insufficient, it is better to not frivolously classify humans as those who are able-bodied, able-minded, or disabled. Rather, we should consider the range of capabilities of individuals and design software in ways to assist them. While disabilities are generally categorized according to sensory, motor, or cognitive impairments, the diversity within each of those categories is substantial. As one example, individuals may be afflicted with blindness, partial blindness, color blindness, low vision, astigmatism, myopia (nearsightedness), hyperopia (farsightedness), or any number of other vision related impairments or combinations of impairments. Just as it is impossible to fully tailor software for every device, whatever its capabilities, it is impossible to fully tailor software for every person, whatever their capabilities. Through neglect and ignorance, our software often punishes individuals for not achieving a high physical and mental standard. No individual will achieve a perfect bodied or perfect minded ideal, so we must design to assist the broad constellation of individuals.

Accommodations intended to assist with particular disabilities also helps those facing related or temporary challenges. Sidewalk ramps intended for wheelchairs assist those with strollers or dollies. Wide hallways facilitate walking sign language conversations, while also providing amble space for wider traffic flow. Comparable examples are noticeable in software. Providing captions and transcripts of a video assists more than just those with hearing impairments. Someone with perfect hearing may purposefully mute the video because they don't want to disturb others or because they don't want the sound to compete with environmental noise. Perhaps the video content warns that its flashiness could cause seizures, so the transcript is read, instead. Someone with a limited or slow data plan may read the captions and transcripts, rather than wait for the buffering video to consume all the bandwidth. Search engine spiders crawl the captions and transcripts so the video can be better indexed and discovered. Designing software that makes content accessible despite certain impairments benefits all people.

While there are numerous [practical considerations for accommodating a variety of impairments](http://webaim.org/articles/userperspective/), the most universal gains are achieved by writing content understandable by people and enhancing it with [semantics understandable by software](http://www.w3.org/TR/aria-in-html/). Practically, content should be well written, structured with appropriate HTML5 tags, and laced with appropriate WAI-ARIA attributes. The interface should be completely [navigable and usable via only the keyboard](http://www.w3.org/WAI/PF/aria-practices/#keyboard). Common interactive components, such as alerts, dialogs, popups, sliders, and tabs, should leverage [best practices](http://www.w3.org/WAI/PF/aria-practices/#aria_ex) when implemented. By doing so, screen readers and other assistive technologies will be able to accurately describe the interface, and the interactions will be translated to the user as the designer intended.

Consequentially, by designing for mobile, we're actually forced to address many concerns that plague those with disabilities, given there are so many [overlaps of design considerations](http://www.w3.org/WAI/mobile/overlap.html). For example, those with low vision often magnify parts of the interface, hiding the rest; the limited screen resolution of mobile encourages us to design for condensed interfaces. Those with deafness cannot respond to audio alerts; vibration or screen notifications may reinforce an audible alert on a mobile device. Those with motor disabilities may have difficulty typing on a keyboard; a tiny mobile keyboard is often strenuous when typing single-handed or long lengths of text. Screen readers read in a linear order; content is typically reformatted into a single column on mobile. Motor or visual disabilities may prevent a mouse from being used; there is no mouse input on mobile. In essence, [mobile becomes a lens to improve interfaces for everyone](http://www.w3.org/WAI/mobile/experiences).

While there is much shared benefit by following WAI-ARIA guidelines and experiencing an application along a spectrum of devices and inputs, more research is needed to understand the accessibility considerations, if any, specifically for the mobile context. In the meantime, there is a variety of research, recommendations, and implications regarding [accessibility strategies for Kuali Student Course Registration](https://wiki.kuali.org/display/STUDENT/Accessibility+Strategy+for+Registration) that should be reviewed.

### Performance

In the same way that we can't assume a device possesses the most advanced capabilities, we can't assume unlimited processing power, enormous memory size, and unrestricted bandwidth will be afforded. We can't excuse poor performance, nor make it a singular task late in the development process. [Performance must be designed](http://bradfrostweb.com/blog/post/performance-as-design/) and is an essential part of the user experience. While there are [numerous techniques](http://gorkamolero.com/work/thought/Web-performance-2.html), we most importantly must [optimize startup time](http://www.w3.org/TR/mwabp/#bp-presentation-startup) and [minimize the perceived latency](http://www.w3.org/TR/mwabp/#bp-presentation-perceived) during application use.

First, we must be more concerned with [minimizing the time it takes for the application to render its first pixel](http://www.lukew.com/ff/entry.asp?1822) than the time it takes for the entire application to load. We should be conservative with the size and number of application resources, utilizing various compression and concatenation techniques. We should reduce resource dependencies and be aware that certain load orders may cause bottlenecking. We should enable caching so unchanged resources or data requests won't be downloaded again. We should conditionally load parts of the application as needed. We should reduce the complexity of the DOM to minimize parsing, processing, and paint time. We should offload complex DOM renderings to the server, rather than burdening the client application.

Second, we must [minimize the feel of the time it takes](http://www.mobify.com/blog/beginners-guide-to-perceived-performance/) to complete an action or instantiate a change. We should use appropriate user interface components to broadcast latency, such as progress bars and spinners. We should mask latency and communicate changes in context through [transitional animation](https://medium.com/design-ux/926eb80d64e3). We should avoid page reloads. We should preload probable next views. We should immediately render parts of an application once ready, instead of waiting on all parts of the application to be ready.

Perhaps one way to ensure performance gains aren't lost throughout the development process is to establish a [performance budget](http://timkadlec.com/2013/01/setting-a-performance-budget/). Specifically, by capping the download weight, it challenges resources and features to be optimized, removed, or not added in the first place. A performance budget establishes a framework of discussion around how content should be displayed, not what should be displayed.

The most effective way to ensure applications load swiftly and run smoothly is by respecting computational and network demands, which are often more evident in mobile contexts. Every millisecond gained counts toward a more delightful user experience, regardless of actual device power or bandwidth speed.

In addition to optimizing the holistic performance of each application, we must evaluate the performance of the tools (e.g. frameworks, libraries, plugins, databases, programs, languages) we use to build the apps. We should hesitate to include or require tools intended for production if they weren't crafted with performance as a foremost design consideration. Student-facing apps must expect and handle the load for thousands of concurrent users, especially during peak use time, such as during student course registration periods. An app that fails to perform its intended task in a timely and consistent manner fails the user and spawns distrust.

### Data services

Not only should we build adaptable, accessible, and performance-considerate applications, but we should provide means for data to be accessed and manipulated beyond the purposes of a single application. By building an infrastructure of robust data exchange, we are investing in a future in which any number of applications or systems, regardless of the target device, could consume and manage equivalent data in the formats best suited for them. Obtaining the data to build native iOS or Android applications should be as easy as doing so for a web application.

As the tools for creating richly interactive web apps mature and as such rich interactivity is expected by users, it becomes more imperative for data, not necessarily rendered content, to be the preferred offering of the server. Most modern implementations use REST web services serving JSON data to accomplish this exchange. Kuali Mobility for the Enterprise (KME) has been almost exclusively using JSON endpoints to feed its applications since its inception.

By establishing this shared data layer, there can be cleaner separation of back-end from front-end initiatives. Back-end developers can better focus on maintaining the integrity of the data and business rules, while front-end developers can better focus on implementing the user interface. Alterations to the back-end don't affect the front-end, as long as the contract for that data is upheld. Likewise, alterations to the front-end have no affect on the back-end. In these ways, all parts become more modularized, stable, and easier to maintain. Once the data service is built, the velocity of all parts of the development process exponentially increases.

## Further considerations

* Responsive design component patterns.
* [Element queries](http://ianstormtaylor.com/media-queries-are-a-hack/).
* JavaScript frameworks ([AngularJS](http://angularjs.org), [Ember.js](http://emberjs.com), [Backbone.js](http://backbonejs.org)).
* JavaScript style guide.
* CSS pre-processors ([LESS](http://lesscss.org), [Sass](http://sass-lang.com)) and post-processors ([Autoprefixer](https://github.com/ai/autoprefixer)).
* CSS naming methodology ([BEM](http://bem.info), [OOCSS](http://oocss.org), [SMACSS](http://smacss.com)).
* CSS frameworks ([Bootstrap](http://getbootstrap.com), [Foundation](http://foundation.zurb.com)).
* Web fonts and iconography.
* Front-end development environments/workflows ([Yeoman](http://yeoman.io)).
* Server-side and client-side feature detection ([Detector](http://detector.dmolsen.com)).
* Server-side and client-side templates.
* [Offline and unstable networks](http://offlinefirst.org).
* [Web components](http://css-tricks.com/modular-future-web-components/) and future-oriented tools ([Polymer](http://www.polymer-project.org)).

## Authors

* Chris Basham, author
* Tara Bazler, co-author
* Erik Rath, contributor
* George Wendal, contributor

<footer class="Article-footer">

This article is republished from the [Kuali wiki](https://wiki.kuali.org/pages/viewpage.action?title=Mobile+Strategies+for+KS&spaceKey=STUDENT).

</footer>
