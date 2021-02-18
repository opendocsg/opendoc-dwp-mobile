(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "index.md",
                title: "Index",
                url: "/opendoc-dwp-mobile/HRP/",
                escapedPath: "HRP/index.md",
                dir: "/HRP/",
                tocId: "toc_/hrp/",
                documentInfo: ["Hrp",null,null]
            },
            
        {
                name: "index.md",
                title: "Index",
                url: "/opendoc-dwp-mobile/Leave/",
                escapedPath: "Leave/index.md",
                dir: "/Leave/",
                tocId: "toc_/leave/",
                documentInfo: ["Leave",null,null]
            },
            
        {
                name: "index.md",
                title: "Index",
                url: "/opendoc-dwp-mobile/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        
        
        {
                name: "Acknowledgements.md",
                title: "Acknowledgements",
                url: "/opendoc-dwp-mobile/Acknowledgements.html",
                escapedPath: "Acknowledgements.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "Business Card.md",
                title: "Business Card",
                url: "/opendoc-dwp-mobile/Business%20Card.html",
                escapedPath: "Business%20Card.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "Contact.md",
                title: "Contact",
                url: "/opendoc-dwp-mobile/Contact.html",
                escapedPath: "Contact.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "Dental Claims.md",
                title: "Dental Claims",
                url: "/opendoc-dwp-mobile/Dental%20Claims.html",
                escapedPath: "Dental%20Claims.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "E-commerce Order.md",
                title: "E-commerce Order",
                url: "/opendoc-dwp-mobile/E-commerce%20Order.html",
                escapedPath: "E-commerce%20Order.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "HRKiosk - Leave.md",
                title: "Leave",
                url: "/opendoc-dwp-mobile/HRKiosk%20-%20Leave.html",
                escapedPath: "HRKiosk%20-%20Leave.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "HRP - Leave.md",
                title: "HRP - Leave",
                url: "/opendoc-dwp-mobile/HRP%20-%20Leave.html",
                escapedPath: "HRP%20-%20Leave.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "NPL-Terms-and-Conditions.md",
                title: "Terms and Conditions for No-Pay Leave (NPL)",
                url: "/opendoc-dwp-mobile/Leave/NPL-Terms-and-Conditions.html",
                escapedPath: "Leave/NPL-Terms-and-Conditions.md",
                dir: "/Leave/",
                tocId: "toc_/leave/",
                documentInfo: ["Leave",null,null]
            },
            
        {
                name: "Medical Bills and Claims.md",
                title: "Medical Bills and Claims",
                url: "/opendoc-dwp-mobile/Medical%20Bills%20and%20Claims.html",
                escapedPath: "Medical%20Bills%20and%20Claims.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "My Account.md",
                title: "My Account",
                url: "/opendoc-dwp-mobile/My%20Account.html",
                escapedPath: "My%20Account.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "Resource.md",
                title: "Resource",
                url: "/opendoc-dwp-mobile/Resource.html",
                escapedPath: "Resource.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "Technical Support.md",
                title: "Technical Support",
                url: "/opendoc-dwp-mobile/Technical%20Support.html",
                escapedPath: "Technical%20Support.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "Temperature Declaration.md",
                title: "Temperature Declaration",
                url: "/opendoc-dwp-mobile/Temperature%20Declaration.html",
                escapedPath: "Temperature%20Declaration.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "Transport Claim.md",
                title: "Transport Claim",
                url: "/opendoc-dwp-mobile/Transport%20Claim.html",
                escapedPath: "Transport%20Claim.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        {
                name: "Visitor.md",
                title: "Visitor",
                url: "/opendoc-dwp-mobile/Visitor.html",
                escapedPath: "Visitor.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["DWP Mobile Help Center","",["My Account.md","Business Card.md","Dental Claims.md","E-commerce Order.md","HRP - Leave.md","HRKiosk - Leave.md","Medical Bills and Claims.md","Resource.md","Temperature Declaration.md","Transport Claim.md","Visitor.md","Technical Support.md","Contact.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()