import * as Styled from './styles';
import { SettingsStrapi } from '../../shared-typed/settings-strapi';
import { Menu } from '../../components/Menu';
import { HeaderContainer } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ children, settings }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={settings.logo.url}
      />

      <Styled.HeaderContainer>
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={settings.logo.url}
        />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.text} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
