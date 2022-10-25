import React from "react";
import "../../assets/default/InfoModalStyle.scss";

const InfoModalStyle = () => {
  return(

    <div className="modal_help-center-desc">
      <ul className="modal_help-control">
        <li className="modal_help-control-item control-info_item">
          <span className="item_wrap">
            <span className="img_wrap">
              <img src="/icon/help_info.png" alt="" />
            </span>
            <span className="img_desc">Check company information.</span>
          </span>
        </li>
        <li className="modal_help-control-item control-info_item">
          <span className="item_wrap">
            <span className="img_wrap">
              <img src="/icon/help_image.png" alt="" />
            </span>
            <span className="img_desc">View related images.</span>
          </span>
        </li>
        <li className="modal_help-control-item control-info_item">
          <span className="item_wrap">
            <span className="img_wrap">
              <img src="/icon/help_video.png" alt="" />
            </span>
            <span className="img_desc">Watch related videos.</span>
          </span>
        </li>
        <li className="modal_help-control-item control-info_item">
          <span className="item_wrap">
            <span className="img_wrap">
              <img src="/icon/help_pdf.png" alt="" />
            </span>
            <span className="img_desc">Read the related brochure.</span>
          </span>
        </li>
        <li className="modal_help-control-item control-info_item">
          <span className="item_wrap">
            <span className="img_wrap">
              <img src="/icon/help_chat.png" alt="" />
            </span>
            <span className="img_desc">Contact the company.</span>
          </span>
        </li>
      </ul>
    </div>

  )
}

export default InfoModalStyle;