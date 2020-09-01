import * as React from "react";
import { useRouter } from "next/router";
import Dot from "~components/Body/Dot";
import FlexStart from "~components/Body/FlexStart";
import Link from "~components/Navigation/Link";

const HeaderTabs = () => {
  const { pathname } = useRouter();
  const [activeTab, setActiveTab] = React.useState(pathname);

  React.useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <FlexStart className="left-nav">
      <Link
        ariaLabel="logo"
        dataTestId="logo-tab"
        hover={false}
        nopadding
        light
        href="/"
      >
        <img
          css="margin-top: 3px;"
          src="/composableLogoHeaderSmall.png"
          alt="logo-header.png"
        />
      </Link>
      <nav>
        {["documentation", "demonstrations", "releases"].map(page => (
          <React.Fragment key={page}>
            <Link
              ariaLabel={`header ${page} tab`}
              active={activeTab.indexOf(page) > -1}
              dataTestId={`${page}-tab`}
              hover
              light
              href={`/${page}`}
              texttransform="capitalize"
            >
              {page}
            </Link>
            {page !== "releases" && <Dot />}
          </React.Fragment>
        ))}
      </nav>
    </FlexStart>
  );
};

export default HeaderTabs;
