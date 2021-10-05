import React from 'react';
import { Container, Flex } from '../styles/globalStyles';
import { FooterNav, FooterContent, FooterSocial } from '../styles/footerStyles';
// icons
import { Facebook, Instagram, Vimeo } from '../components/svg/social-icons';

function Footer({ onCursor }) {
  return (
    <div>
      <FooterNav>
        <Container>
          <Flex spaceBetween>
            <FooterContent>
              <p>902.315.1279</p>
              <p>info@furrow.studio</p>
            </FooterContent>
            <FooterContent wider>
              <p>15 Camburhill Ct Unit C</p>
              <p>Charlottetown, PE C1E 0E2</p>
            </FooterContent>
            <FooterSocial>
              <a
                href=""
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={() => onCursor()}
              >
                <Instagram />
              </a>
              <a
                href=""
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={() => onCursor()}
              >
                <Facebook />
              </a>
              <a
                href=""
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={() => onCursor()}
              >
                <Vimeo />
              </a>
            </FooterSocial>
          </Flex>
        </Container>
      </FooterNav>
    </div>
  );
}

export default Footer;
