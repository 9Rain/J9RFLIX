import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 220px;
  border: 1px solid #fff;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center
`;

const CardImage = styled.a`
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  width: 190px;
  height: 141px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin: 0 0 15px 0;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

const CardTitle = styled.h2`
  width: 100%;
  height: 55px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: .9em;
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardDate = styled.h3`
  width: 100%;
  height: auto;
  line-height: 1;
  font-family: 'Montserrat', sans-serif;
  font-size: .65em;
  font-weight: 400;
  margin: 0;
  overflow: hidden;
`;

export default function VideoCardContainer({ videoTitle, url }) {
  return (
    <Container onClick="{function() {console.log('ok');}}">
      <CardImage url={url} />
      <CardTitle>{videoTitle}</CardTitle>
      <CardDate>08 set 2020</CardDate>
    </Container>
  );
};

function VideoCardContainerHandler(e, url) {
  e.preventDefault();
  window.location.href = url;
}

