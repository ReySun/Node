/**
 * Created by bjwsl-001 on 2016/11/16.
 */
//�⹹: ͬʱ�����������ֵ�ļ�д��
//1. ʹ�������±�ƥ���������ֵ
  //ǿ��: �Ⱥ���߽��������������������
       //�Ⱥ��ұ߽�Ҫ����ֵ����������
       //�Զ���õȺ��ұ������ֵ����ֵ���Ⱥ������ͬ�±�λ�õı���
       //���������ÿ���������ɵ���ʹ��
var [a,b,c]=[1,2,3];
console.log(a,b,c);
//2. �ö��������ͬʱ�Զ��������ֵ
  //�Ⱥ����: ���������ڶ��������ֵ��
  //�Ⱥ��ұ�: ��������ֵ���ں���߶�����ͬ����������Ϊֵ
  //ƥ��ʱ: ���ұ߶�������ͬ����������ֵ��ֵ���Ⱥ������ͬ�������ı�����
var {m:month,y:year,d:date}={d:16,y:2016,m:11};
console.log(month,year,date);
//3. ��Ϊ�����Ĳ�������:
function g({name:x,age:y}){
  console.log(x,y);
}
var lilei={name:"Li Lei",age:13};
g(lilei);