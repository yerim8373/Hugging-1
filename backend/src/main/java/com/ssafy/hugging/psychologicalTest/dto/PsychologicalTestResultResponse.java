package com.ssafy.hugging.psychologicalTest.dto;

import com.ssafy.hugging.model.Category;
import com.ssafy.hugging.psychologicalTest.domain.PsychologicalTestResult;

import lombok.Getter;

@Getter
public class PsychologicalTestResultResponse {
	private final Integer resultScore;
	private final Category category;

	public PsychologicalTestResultResponse(PsychologicalTestResult psychologicalTestResult) {
		category = psychologicalTestResult.getPsychologicalTestCategory().getCategory();
		resultScore = psychologicalTestResult.getScore();
	}
}
