"use client";

import { useState } from "react";
import { SurveyData } from "@/types";

const initialData: SurveyData = {
  projectType: null,
  propertyType: null,
  areas: [],
  size: null,
  timeline: null,
  contact: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    suburb: "",
  },
};

export function useMultiStep(totalSteps: number) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<SurveyData>(initialData);
  const [isComplete, setIsComplete] = useState(false);

  function setStepData(update: Partial<SurveyData>) {
    setData((prev) => ({ ...prev, ...update }));
  }

  function next() {
    if (step < totalSteps - 1) {
      setStep((s) => s + 1);
    } else {
      setIsComplete(true);
    }
  }

  function back() {
    if (step > 0) setStep((s) => s - 1);
  }

  function reset() {
    setStep(0);
    setData(initialData);
    setIsComplete(false);
  }

  return {
    step,
    totalSteps,
    isFirstStep: step === 0,
    isLastStep: step === totalSteps - 1,
    isComplete,
    data,
    setStepData,
    next,
    back,
    reset,
  };
}
