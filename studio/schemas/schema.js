// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import social from "./documents/social";
import page from "./documents/page";
import route from "./documents/route";
import siteConfig from "./documents/siteConfig";
import person from "./documents/person";
import gallery from "./documents/gallery";
import painting from "./documents/painting";
import pottery from "./documents/pottery";
import photography from "./documents/photography";

// Object types
import blockContent from "./objects/blockContent";
import cta from "./objects/cta";
import figure from "./objects/figure";
import internalLink from "./objects/internalLink";
import link from "./objects/link";
import portableText from "./objects/portableText";
import simplePortableText from "./objects/simplePortableText";
import contactInfo from "./objects/contactInfo";

// Landing page sections
import hero from "./objects/hero";
import imageSection from "./objects/imageSection";
import textSection from "./objects/textSection";

import localeString from "./locale/String";
import localeText from "./locale/Text";
import localeBlockContent from "./locale/BlockContent";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    social,
    page,
    route,
    siteConfig,
    person,
    gallery,
    painting,
    pottery,
    photography,
    // When added to this list, object types can be used as
    cta,
    figure,
    internalLink,
    link,
    hero,
    imageSection,
    textSection,
    portableText,
    simplePortableText,
    contactInfo,
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
  ]),
});
