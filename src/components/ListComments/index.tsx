import { useEffect, useState } from "react";
import CommentBox from "../CommentBox";
import { fetchComments } from "../../services/axios";
import * as S from './styles';

const ListComments: React.FC = () => {
    const [comments, setComments] = useState([]);


    useEffect(() => {
        getComments();
    }, [])

    const getComments = async () => {
        try {
            const response = await fetchComments();
            setComments(response)
        } catch (error) {
            alert('algo deu errado')
        }
    }

    return <S.Container>
    <h1>Comentários</h1>
    <br/>
        {comments.length > 0 && comments.map((comment: {
            postId: number;
            id: number;
            name: string;
            email: string;
            body: string;
        }) => (
            <CommentBox key={comment.id} comments={comment} />
        ))}
    </S.Container>
}

export default ListComments;