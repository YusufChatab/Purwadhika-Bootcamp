import styled from "styled-components";

interface props {
  name: string;
  email: string;
}

const Title = styled.h1`
  color: red;
  font-size: 80px;
`;

function Home({ name, email }: props) {
  return (
    <>
      <Title>Ini halaman</Title>

      <h4>
        Hello {name}, {email}
      </h4>
    </>
  );
}

export default Home;
