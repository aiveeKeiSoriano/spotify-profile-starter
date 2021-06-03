import { useSelector } from "react-redux";
import styled from "styled-components";
import SideBar from "./SideBar";

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    background-color: rgb(24,24,24);
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em 1em;
    height: 100vh;
    overflow-y: scroll;
    flex: 1;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Head = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    color: white;

    p {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .filters {
        display: flex;
        gap: 1em;
    }

    button {
        color: white;
        background-color: transparent;
        border: none;
        font-weight: 500;
        cursor: pointer;

        &:hover {
            text-decoration-line: underline;
        }
    }
`

const Items = styled.div`
    padding: 4em 0em 2em 0em;
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2.5em;

`

const Artist = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;

    img {
        width: 150px;
        height: 150px;
        object-position: center;
        object-fit: cover;
        border-radius: 50%;
    }

    a {
        font-size: 0.9rem;
        color: white;
        text-decoration-line: none;
        font-weight: 600;

        &:hover {
            text-decoration-line: underline;
        }
    }
`

export default function TopArtist() {

    let artistList = useSelector(state => state.user.topArtists)

    return (
        <Wrapper>
            <SideBar />
            <Content>
                <Head>
                    <p>Top Artists</p>
                    <div className="filters">
                        <button>All Time</button>
                        <button>Last 6 Months</button>
                        <button>Last 4 Weeks</button>
                    </div>
                </Head>
                <Items>
                    {artistList.map(el => <Artist>
                        <img src={el.images[0].url} alt="artist" />
                        <a href={el.external_urls.spotify}>{el.name}</a>
                    </Artist> )}
                </Items>
            </Content>
        </Wrapper>
    )
}