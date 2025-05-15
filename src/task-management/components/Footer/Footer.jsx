import FooterStyles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={FooterStyles.footer}>
        <small className={FooterStyles.small}>
          © 2025 - Calet Devia - Todos los Derechos Reservados
        </small>
      </footer>
    </>
  );
};

export default Footer;
