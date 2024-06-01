import styled from 'styled-components';

// Стили для основной информации о фильме
export const ButtonGoBack = styled.button`
    margin-bottom: 20px;
`;

export const WrapperInfo = styled.div`
    display: flex;
    padding-bottom: 10px;

    border-bottom: solid 2px #cecece;
`;

export const MovieInfo = styled.div`
    padding: 30px 20px 30px  20px;
`;

export const MovieTitle = styled.h2`
    margin-bottom: 20px;
`;

export const MovieScore = styled.p`
    margin-bottom: 20px;
`;

export const MovieOverviewTitle = styled.h3`
    margin-bottom: 10px;
`;

export const MovieOverview = styled.p`
    margin-bottom: 20px;
`;

export const MovieGenresTitle = styled.h4`
    margin-top: 0;
    margin-bottom: 10px;
`;

export const MovieGenresList = styled.div`
    display: flex;
`;

export const MovieGenres = styled.p`
    margin-right: 10px;
`;

// Стили для дополнительной информации о фильме
export const WrapperAddInfo = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;

    border-bottom: solid 2px #cecece;
`;

export const AddInfoTitle = styled.p`
    margin-bottom: 20px;
`;

export const AddInfoItem = styled.li`
    margin-left: 30px;

    &:first-child {
        margin-bottom: 5px;
    }
`;