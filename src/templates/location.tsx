/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import Banner from "../components/banner";
import Details from "../components/details";
import Hours from "../components/hours";
import List from "../components/list";
import Header from "../components/header";
import Footer from "../components/footer";
import PageLayout from "../components/page-layout";
import StaticMap from "../components/static-map";
import Favicon from "../public/guuci-favicon.ico";
import "../index.css";
import Card from "../components/card";
// import App from "../components/slider-banner";
import PhotoGallery from "../components/photo-gallery";
/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "c_model",
      "description",
      "logo",
      "color", 
      "price",
      "c_usage_Application",
      "c_displayType",
      "c_shapeDesign",
      "photoGallery",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["ce_gUCCI"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
      {
        type: "link",
        attributes: {
          rel: 'icon',
          type: 'image/x-icon',
          href: Favicon
        },
      }
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    _site,
    name,
    c_model,
    description,
    logo,
    color, 
    price,
    c_usage_Application,
    c_displayTpye,
    c_shapeDesign,
    photoGallery,
  } = document;
  const images = photoGallery.map((img:any)=>{
    return <img src={img.image.url}/>
  })

  return (
    <>
    <Header/>
   <Banner/>
  {/* <div className="text-amber-600">{name}</div>
    <br></br>model: {c_model}
    <br></br>Currence{price.currencyCode} 
    <div className="text-amber-600">Price: {price.value}</div>
    <br></br>shape: {c_shapeDesign}
    {c_displayTpye}
    <br></br>Color:{color}
    <br></br>usages: {c_usage_Application}
    <br></br>Descrpetion:{description}
    <img src={logo.image.url} style={{height:"320px",width:"320px"}}></img> */}

<div>
        <div className="centered-container">
          <div className="section">
            <div className="grid grid-cols-2 gap-x-10 gap-y-10">
              <div
                className="bg-gray-100 p-2"
                style={{ color: "black", fontFamily: "cursive" }}
              >{`product name :  ${name}`}
              {<br/>}
              {<br/>}

              {`product Model :  ${c_model}`}
              {<br/>}
              {<br/>}
              {`price :  ${document?.price.value}`}
              {<br/>}
              {<br/>}
              {`Description :  ${description}`}
              </div>
              {/*<div
                className="bg-gray-100 p-2"
                style={{ color: "black", fontFamily: "cursive" }}
              >{`product Model :  ${c_model}`}
              </div>*/}
              {/*<div className="bg-gray-100 p-2">
                <p>{`price :  ${document?.price.value}`}</p>
              </div>*/}
              {/*<div className="bg-gray-100 p-2">
                <div className="text-xl font-semibold">{`About ${name}`}</div>
                <p className="pt-4">{description}</p>
              </div>*/}
              <div className="bg-gray-10" style={{height:"320px",width:"320px"}}>{images}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      {/* <PhotoGallery/> */}


    </>
  );
};

export default Location;
