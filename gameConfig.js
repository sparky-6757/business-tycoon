// gameConfig.ts

export const DIFFICULTY_SETTINGS = {
    easy: {
        startingCash: 500000,
        bdSuccessRateModifier: 1.2, // 20% higher win chance
        integrationRiskModifier: 0.8 // 20% less risk
    },
    normal: {
        startingCash: 250000,
        bdSuccessRateModifier: 1.0,
        integrationRiskModifier: 1.0
    },
    hard: {
        startingCash: 100000,
        bdSuccessRateModifier: 0.8, // 20% lower win chance
        integrationRiskModifier: 1.2 // 20% more risk
    }
};

export const SETTINGS = {
    applicantRefreshIntervalWeeks: 2,
    leadExpirationWeeks: 3,
    progressTrackerUpdateInterval: 1 // weeks
};

export const INITIAL_STATS = {
  cash: 500000,
  bdSuccessRate: 50,
  integrationRisk: 10,
};