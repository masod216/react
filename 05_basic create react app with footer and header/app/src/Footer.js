import './Footer.css';
function Footer() {
  return (
    <div className="Footer">
       <p>&copy; {(new Date()).getFullYear()} Anna Karp</p>
    </div>
  );
}

export default Footer;
