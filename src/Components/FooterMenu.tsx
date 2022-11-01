type FooterMenuTypes = {
  children: React.ReactNode;
};
function FooterMenu(props: FooterMenuTypes) {
  const { children } = props;
  return <div className="flex items-center gap-4">{children}</div>;
}

export default FooterMenu;
