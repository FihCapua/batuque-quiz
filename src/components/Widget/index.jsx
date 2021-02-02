import styled from 'styled-components';

const Widget = styled.div`
  margin: 0 auto 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.altBg};
  overflow: hidden;
  width: 100%;

  h2, h3 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2rem;
    margin-bottom: 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    height: 0;
    margin: 20px 0;
  }

  img {
    display: block;
    width: 100%;
  }
`;

Widget.Header = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding: 18px 32px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.third};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0;
`;

Widget.HeaderImage = styled.h1`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.third};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 10px 10px;
  margin: 0;

  img {
    display: block;
    width: 100%;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  background-color: #232323;
  color: #fff;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Image = styled.div`
  position: relative;

  .animation {
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

Widget.Alternatives = styled.ul`
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
`;

Widget.Progress = styled.p`
  margin: 20px 0;
  padding: 0;
  font-size: 0.85rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

Widget.Description = styled.p`
  margin: 20px 0;
  padding: 0;
  font-size: 1rem;
  line-height: 1.4rem;
`;

Widget.Links = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  li {
    margin-top: 20px;
  }
`;

Widget.Link = styled.a`
  display: block;
  border-radius: 0;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.altBg};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  width: 100%;
  font-family: "Work Sans";
  font-size: 0.9rem;
  box-shadow: 0 0 0 rgba(0,0,0,0.2);
  transform: translate(0, 0);
  transition: all 0.25s ease-in-out;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.dimmed};
    transform: translate(-5px, -5px);
    box-shadow: 10px 10px 0 rgba(0,0,0,0.2);
  }

  &:active {
    background: ${({ theme }) => theme.colors.dimmed};
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
  }
`;

export default Widget;
