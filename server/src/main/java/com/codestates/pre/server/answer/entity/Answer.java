package com.codestates.pre.server.answer.entity;

import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Auditable;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false, columnDefinition = "Text")
    private String answerContent;
    // cloumnDefinition 을 이용하면 원하는 컬럼 타입으로 데이터 추출이 가능하다.
    // TEXT: 65,535 bytes (~64Kb, 21,844 UTF-8 encoded characters)

    @Column
    private int score;

    @Column
    private LocalDateTime creationAt = LocalDateTime.now();

    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now();


    //question:answer = 1:n
    @ManyToOne
    @JoinColumn(name="id") // 외래키 컬럼명 즉, question 클래스의 @id가 붙은 필드명
    private Question question;

    // members:answer = 1:n
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

//    @OneToMany(mappedBy = "answer" )
//    private 타입 answerVote ;




}
