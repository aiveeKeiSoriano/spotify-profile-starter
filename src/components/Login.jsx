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
    font-size: 2rem;
    color: white;
    `
    const LogInBtn = styled.a`
    background-color: #1FBA57;
    color: white;
    padding: 1em 1.5em;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    `;

    // const URL = 'https://accounts.spotify.com/authorize?client_id=b6b96f827f584079959eae2bd104c04f&response_type=token&scope=user-top-read%20user-read-private%20user-read-email&redirect_uri=http://localhost:3000/profile'
    // const URL = 'https://accounts.spotify.com/authorize?client_id=b6b96f827f584079959eae2bd104c04f&response_type=code&scope=user-top-read%20user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fprofile'
    const URL = 'https://accounts.spotify.com/authorize?client_id=e7bebc81234e4737ada60bc666eb50d7&response_type=code&scope=user-top-read%20user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fprofile'
    
    return (
        <LoginContainer>
            <H1Tag>Spotify Profile</H1Tag>
            <LogInBtn href={URL}>
                LOG IN TO SPOTIFY </LogInBtn>
        </LoginContainer>
    )
}