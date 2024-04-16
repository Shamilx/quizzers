export function calculateResultTruth(results: boolean[]) {
    let trueAnswers = 0;

    results.map(result => result === true ? trueAnswers++ : false);

    return (trueAnswers / results.length) * 100;
}