import styled from 'styled-components'
export default function Login() {

    const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.2em;
    justify-content: center;
    height: 100vh;
    background-color: #181818;
    `
    const H1Tag = styled.h1`
    font-size: 1.5em;
    color: white;
    `
    const LogInBtn = styled.a`
    background-color: #1FBA57;
    color: white;
    padding: 1em 2em;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    `;

    return (
        <LoginContainer>
            <H1Tag>Spotify Profile</H1Tag>
            <LogInBtn href='https://accounts.spotify.com/authorize?client_id=b6b96f827f584079959eae2bd104c04f&response_type=token&scope=user-top-read%20user-read-private%20user-read-email&redirect_uri=http://localhost:3000/profile'>
               LOG IN TO SPOTIFY </LogInBtn>
        </LoginContainer>
    )
}