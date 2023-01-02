package com.codestates.pre.server.answer.entity;

import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@CrossOrigin
@Table(name = "ANSWERS")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false, columnDefinition = "Text")
    private String answerContent;
    // cloumnDefinition 을 이용하면 원하는 컬럼 타입으로 데이터 추출이 가능하다.
    // TEXT: 65,535 bytes (~64Kb, 21,844 UTF-8 encoded characters)

    @Transient
    private long mid;

    @Transient
    private long qid;

    @Column
    private int score;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime modifiedAt;

    //question:answer = 1:n
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="question_id") // 외래키 컬럼명 즉, question 클래스의 @id가 붙은 필드명
    private Question question;

    // members:answer = 1:n
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

//    @OneToMany(mappedBy = "answer")
//    private 타입 answerVote ;

    public void addMember(Member member) {
        if (this.member != null) {
            this.member.getAnswers().remove(this);
        }
        this.member = member;
        this.member.getAnswers().add(this);
    }

    public void addQuestion(Question question) {
        if (this.question != null) {
            this.question.getAnswers().remove(this);
        }
        this.question = question;
        this.question.getAnswers().add(this);
    }
}
