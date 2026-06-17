import type {StructureBuilder} from 'sanity/desk'

const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([

      S.listItem()
        .title('Homepage Sections')
        .child(
          S.list()
            .title('Homepage Sections')
            .items([
              S.documentTypeListItem('banner'),
              S.documentTypeListItem('announcementBar'),
              S.documentTypeListItem('category'),
              S.documentTypeListItem('diamondShape'),
              S.documentTypeListItem('engagementRingCategory'),
              S.documentTypeListItem('mustHaveRings'),
              S.documentTypeListItem('promoBanner'),
              S.documentTypeListItem('athletePromo'),
              S.documentTypeListItem('anniversaryCollections'),
              S.documentTypeListItem('showroomSection'),
              S.documentTypeListItem('missionSection'),
              S.documentTypeListItem('instagramGallery'),
              S.documentTypeListItem('popularProducts'),
            ])
        ),

      S.documentTypeListItem('promoPage').title('Promo Codes Page'),
      
      S.listItem()
        .title('Category Highlights')
        .child(
          S.documentTypeList('categoryHighlights')
            .title('Category Highlights')
        ),

      S.listItem()
        .title('Category FAQs')
        .child(
          S.list()
            .title('Category FAQs')
            .items([
              S.listItem()
                .title('Rings')
                .child(
                  S.documentList()
                    .title('Rings FAQs')
                    .schemaType('categoryFaq')
                    .filter('_type == "categoryFaq" && pageContext == "rings"')
                ),
              S.listItem()
                .title('Silver Earrings')
                .child(
                  S.documentList()
                    .title('Silver Earring FAQs')
                    .schemaType('categoryFaq')
                    .filter('_type == "categoryFaq" && pageContext == "earrings"')
                ),
              S.listItem()
                .title('Silver Pendants')
                .child(
                  S.documentList()
                    .title('Silver Pendant FAQs')
                    .schemaType('categoryFaq')
                    .filter('_type == "categoryFaq" && pageContext == "pendants"')
                ),
              S.listItem()
                .title('Silver Bracelets')
                .child(
                  S.documentList()
                    .title('Silver Bracelet FAQs')
                    .schemaType('categoryFaq')
                    .filter('_type == "categoryFaq" && pageContext == "bracelets"')
                ),
              S.listItem()
                .title('Gifts')
                .child(
                  S.documentList()
                    .title('Gift FAQs')
                    .schemaType('categoryFaq')
                    .filter('_type == "categoryFaq" && pageContext == "gifts"')
                ),
              S.listItem()
                .title('All Category FAQs')
                .child(
                  S.documentTypeList('categoryFaq')
                    .title('All Category FAQs')
                ),
            ])
        ),
      S.documentTypeListItem('faqPage').title('FAQ Page'),
      S.documentTypeListItem('notFoundPage').title('404 Page'),

      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog Sections')
            .items([
              S.documentTypeListItem('blogHero').title('Blog Hero Section'),
              S.documentTypeListItem('blogPopularGuides').title('Popular Guides'),
              S.documentTypeListItem('blogRingGuides').title('Ring Guides'),
              S.documentTypeListItem('blogWeddingRingGuides').title('Wedding Ring Guides'),
              S.documentTypeListItem('blogDiamondGuides').title('Diamond Guides'),
              S.documentTypeListItem('blogJewelryGuides').title('Jewelry Guides'),
              S.documentTypeListItem('blog').title('Blog Posts'),
            ])
        ),

    
      S.listItem()
        .title('Rings')
        .child(
          S.list()
            .title('Rings')
            .items([
              S.documentTypeListItem('hero'),
              S.documentTypeListItem('shopbyShape'),
              S.documentTypeListItem('engagementRingStyle'),
              S.documentTypeListItem('engagementRingDesignOption'),
              S.documentTypeListItem('giftCardPromoBanner'),
              S.documentTypeListItem('engagementHighlights'),
              S.documentTypeListItem('signatureCollections'),
              S.documentTypeListItem('diamondLeadershipBanner'),
              S.documentTypeListItem('engagementReview'),
              S.documentTypeListItem('engagementGuide'),
              S.listItem()
                .title('Category FAQs')
                .child(
                  S.documentList()
                    .title('Engagement Ring FAQs')
                    .schemaType('categoryFaq')
                    .filter('_type == "categoryFaq" && pageContext == "rings"')
                ),
            ])
        ),

     
      S.listItem()
        .title('Rings Shop All')
        .child(
          S.list()
            .title('Shop All Sections')
            .items([
              S.documentTypeListItem('ringStyleCarouselItem'),
               S.documentTypeListItem('exploreItem'),
               S.documentTypeListItem('exploreLinkGroup'),
              S.documentTypeListItem('categoryFaq'),
              
            ])
        ),

 S.listItem()
        .title('Engagement Ring Filters')
        .child(
          S.list()
            .title('Filters')
            .items([
              S.documentTypeListItem('engagementRingSettingStyle'),
              S.documentTypeListItem('engagementRingMetal'),
              S.documentTypeListItem('engagementRingDiamondShape'),
              S.documentTypeListItem('engagementRingWidth'),
              S.documentTypeListItem('engagementRingProngType'),
              S.documentTypeListItem('engagementRingPriceSettings'),
            ])
        ),

      
      S.listItem()
        .title('Earrings')
        .child(
          S.list()
            .title('Earrings')
            .items([
              S.documentTypeListItem('earringsHero'),
              S.documentTypeListItem('earringStyle'),
              S.documentTypeListItem('earringsPromoSection'),
              S.documentTypeListItem('earringsEditSection'),
              S.listItem()
                .title('Category FAQs')
                .child(
                  S.documentList()
                    .title('Silver Earring FAQs')
                    .schemaType('categoryFaq')
                    .filter('_type == "categoryFaq" && pageContext == "earrings"')
                ),
            ])
        ),

      S.listItem()
        .title('Earring Filters')
        .child(
          S.list()
            .title('Earring Filters')
            .items([
              S.documentTypeListItem('earringFilterStyle'),
            ])
        ),

      S.listItem()
        .title('Silver Earrings Shop All')
        .child(
          S.list()
            .title('Silver Earrings Shop All Sections')
            .items([
              S.documentTypeListItem('earringStyleCarouselItem'),
            ])
        ),

      S.listItem()
        .title('Pendants')
        .child(
          S.list()
            .title('Pendants')
            .items([
              S.documentTypeListItem('pendantsHero'),
              S.documentTypeListItem('pendantStyle'),
              S.documentTypeListItem('pendantsPromoSection'),
              S.documentTypeListItem('pendantsStandardsBanner'),
              S.documentTypeListItem('pendantsEditSection'),
              S.listItem()
                .title('Category FAQs')
                .child(
                  S.documentList()
                    .title('Silver Pendant FAQs')
                    .schemaType('categoryFaq')
                    .filter('_type == "categoryFaq" && pageContext == "pendants"')
                ),
            ])
        ),

      S.listItem()
        .title('Pendant Filters')
        .child(
          S.list()
            .title('Pendant Filters')
            .items([
              S.documentTypeListItem('pendantFilterStyle'),
            ])
        ),

      S.listItem()
        .title('Silver Pendants Shop All')
        .child(
          S.list()
            .title('Silver Pendants Shop All Sections')
            .items([
              S.documentTypeListItem('pendantStyleCarouselItem'),
            ])
        ),

      S.listItem()
        .title('Bracelets')
        .child(
          S.list()
            .title('Bracelets')
            .items([
              S.documentTypeListItem('braceletsHero'),
              S.documentTypeListItem('braceletStyle'),
              S.documentTypeListItem('braceletsPromoSection'),
              S.documentTypeListItem('braceletsStandardsBanner'),
              S.documentTypeListItem('braceletsEditSection'),
              S.listItem()
                .title('Category FAQs')
                .child(
                  S.documentList()
                    .title('Silver Bracelet FAQs')
                    .schemaType('categoryFaq')
                    .filter('_type == "categoryFaq" && pageContext == "bracelets"')
                ),
            ])
        ),

      S.listItem()
        .title('Bracelet Filters')
        .child(
          S.list()
            .title('Bracelet Filters')
            .items([
              S.documentTypeListItem('braceletFilterStyle'),
            ])
        ),

      S.listItem()
        .title('Bracelets Shop All')
        .child(
          S.list()
            .title('Bracelets Shop All Sections')
            .items([
              S.documentTypeListItem('braceletStyleCarouselItem'),
            ])
        ),

      S.listItem()
        .title('Gifts')
        .child(
          S.list()
            .title('Gifts')
            .items([
              S.documentTypeListItem('giftsHero'),
              S.documentTypeListItem('giftStyle'),
              S.documentTypeListItem('giftsShopByPrice'),
              S.documentTypeListItem('giftsPromoSection'),
              S.documentTypeListItem('giftsShopByOccasion'),
              S.documentTypeListItem('giftsStandardsBanner'),
              S.documentTypeListItem('giftsEditSection'),
              S.listItem()
                .title('Category FAQs')
                .child(
                  S.documentList()
                    .title('Category FAQs')
                    .schemaType('categoryFaq')
                    .filter('_type == "categoryFaq"')
                ),
            ])
        ),

      S.listItem()
        .title('Gift Filters')
        .child(
          S.list()
            .title('Gift Filters')
            .items([
              S.documentTypeListItem('giftFilterStyle'),
            ])
        ),

      S.listItem()
        .title('Gifts Shop All')
        .child(
          S.list()
            .title('Gifts Shop All Sections')
            .items([
              S.documentTypeListItem('giftStyleCarouselItem'),
            ])
        ),

      S.listItem()
        .title('Education - Diamond Guide')
        .child(
          S.list()
            .title('Diamond Guide Sections')
            .items([
              S.documentTypeListItem('diamondGuideHero'),
              S.documentTypeListItem('diamondGuideCSDiamond'),
              S.documentTypeListItem('diamondGuideFourPoints'),
              S.documentTypeListItem('diamondGuideCertification'),
              S.documentTypeListItem('diamondGuideFaq'),
              S.documentTypeListItem('diamondGuideNeedHelp'),
            ])
        ),

      S.listItem()
        .title('Education - Metal Guide')
        .child(
          S.list()
            .title('Metal Guide Sections')
            .items([
              S.documentTypeListItem('metalGuideHero'),
              S.documentTypeListItem('metalGuideParagraphText'),
              S.documentTypeListItem('metalGuideTwoPoints'),
              S.documentTypeListItem('metalGuideGoldPuritySummary'),
            ])
        ),

      S.listItem()
        .title('Education - Ring Size Guide')
        .child(
          S.list()
            .title('Ring Size Guide Sections')
            .items([
              S.documentTypeListItem('ringSizeGuideHero'),
              S.documentTypeListItem('ringSizeGuideParagraphText'),
              S.documentTypeListItem('ringSizeGuideHowToMeasure'),
              S.documentTypeListItem('ringSizeGuideThreePoints'),
              S.documentTypeListItem('ringSizeGuideConversionChart'),
              S.documentTypeListItem('ringSizeGuideFaq'),
            ])
        ),

      S.listItem()
        .title('Education - Jewellery Care')
        .child(
          S.list()
            .title('Jewellery Care Sections')
            .items([
              S.documentTypeListItem('jewelleryCareIntro'),
              S.documentTypeListItem('diamondMetalCare'),
            ])
        ),

      S.listItem()
        .title('Education - Hallmark')
        .child(
          S.list()
            .title('Hallmark Sections')
            .items([
              S.documentTypeListItem('hallmarkContent'),
            ])
        ),

      S.listItem()
        .title('Education - Wedding Ring Guide')
        .child(
          S.list()
            .title('Wedding Ring Guide Sections')
            .items([
              S.documentTypeListItem('weddingRingGuideIntroduction'),
              S.documentTypeListItem('weddingRingGuideMetalChoice'),
              S.documentTypeListItem('weddingRingGuideCustomizationLevel'),
              S.documentTypeListItem('weddingRingGuideBudget'),
              S.documentTypeListItem('weddingRingGuideMatchingSets'),
              S.documentTypeListItem('weddingRingGuideAlternativePiece'),
              S.documentTypeListItem('weddingRingGuideInsurance'),
            ])
        ),

    ])

export default deskStructure

