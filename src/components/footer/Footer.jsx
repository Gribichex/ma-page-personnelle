import linkedin_png from "../../medias/icons/linkedin.png"

function Footer() {
  return (
    <div className="bottom-container">
      <a
        className="footer-link"
        href="https://www.linkedin.com/in/julien-petitpierre-21929372"
      >
        <img className="linkedin" src={linkedin_png} alt="" />
      </a>
      <p className="copyright">© 2021 Julien PETITPIERRE.</p>
      <span style={{ margin: "0 20px" }}>
        Icons made by
        <a href="https://www.flaticon.com/authors/srip" title="srip">
          srip
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </span>

      <span style={{ margin: "0 20px" }}>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </span>

      <span style={{ margin: "0 20px" }}>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </span>
    </div>
  );
}

export default Footer;
