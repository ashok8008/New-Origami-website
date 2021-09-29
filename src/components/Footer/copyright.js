import * as Icon from "react-feather";

const FooterCopyright = () => {
  return (
    <div className="og-footer-copyright d-md-flex justify-content-lg-between">
      <div className="p-2 bd-highlight">
        Made with <Icon.Heart width="18" color="red" /> from the people of
        Origami
      </div>
      <div className="p-2 bd-highlight">
        @ 2021 Origami. All Rights Reserved.
      </div>
    </div>
  );
};

export default FooterCopyright;
