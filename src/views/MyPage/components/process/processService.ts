import { isTypeQueryNode, transpileModule } from 'typescript';

/**
 * 콤마가 있는 문자열인 경우 => 콤마까지를 한 문장으로 만들고 배열에 담는 메소드
 */
export const lengthChecker = (str: string): string[] => {
  let head = 0;
  let tail = 0;
  let result = [];
  while (str.indexOf(',') > -1) {
    tail = str.indexOf(',');
    result.push(str.slice(head, tail + 1));
    str = str.slice(tail + 2);
  }
  result.push(str);

  return result;
};

/**
 * 맨 마지막 process인 경우 Divider component를 추가하지 않게 체크하는 메소드
 */
type ProcessInfoProps = {
  id: number;
  step: number;
  title: string;
  status: string;
};

type DividerCheckerProps = {
  idx: number;
  processInfo: ProcessInfoProps[];
};

export const dividerChecker = ({ ...props }: DividerCheckerProps): any => {
  const { idx, processInfo } = props;
  if (idx !== processInfo.length - 1) return true;
  return false;
};

/**
 * step = {completed: 3, progress: 2, not yet: 1};
 * processInfo의 step들이 3 -> 2 -> 1 순서대로 들어가있는지 확인하는 메소드
 */

type ValidatorProps = ProcessInfoProps[];
export function stepChecker(processInfo: ValidatorProps): boolean {
  let steps = processInfo.map((process) => process.step);
  let max: number = steps[0];
  for (let num of steps) {
    if (max < num) {
      return false;
    }
    max = num;
  }
  return true;
}
