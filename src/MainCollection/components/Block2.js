import React from "react";
import { Image } from "@uniwebcms/module-sdk";

export default ({ block, profile, page }) => {
  // console.log('Congrats, the setup is successful!');
  // console.log('Props received are: ', props);
  //   const { block, profile, website } = props;
  const l2 =
    profile.activeLang == "fr" ? "langue actuelle" : "current language";

  //   console.log(block);

  // console.log(website.docufolio.template);
  //   console.log(block);

  // const doc = new Profile('docufolio', website.docufolio.template);
  const doc = page.getPageProfile();

  return (
    <>
      <p className="text-lg text-gray-700 font-bold px-4 py-2 bg-gray-100">
        {block.title}
      </p>
      <p className="text-lg text-blue-700 font-bold px-4 py-2 bg-gray-100">
        {" "}
        {l2} = {profile.activeLang}
      </p>
      {/* <p>{ block.main.banner.value }</p> */}
      <Image value={block.main.banner.value} profile={doc} className="w-72" />
      {block.main.body.paragraphs.map((text) => (
        <p>{text}</p>
      ))}
    </>
  );
};
