import React from "react";

import * as S from "./styles";

const FindBoardItem = () => {
  return (
    <S.BoardItem>
      <S.LabelContainer>
        <S.Label>습득물 명</S.Label>
      </S.LabelContainer>
      <S.LabelContainer>
        <S.Label>습득 장소</S.Label>
      </S.LabelContainer>
      <S.LabelContainer>
        <S.Label>보관 장소</S.Label>
      </S.LabelContainer>
      <S.LabelContainer>
        <S.Label>댓글 수</S.Label>
      </S.LabelContainer>
      <S.LabelContainer>
        <S.Label>작성자</S.Label>
      </S.LabelContainer>
      <S.LabelContainer>
        <S.Label>작성 날짜</S.Label>
      </S.LabelContainer>
    </S.BoardItem>
  );
};

export default FindBoardItem;
