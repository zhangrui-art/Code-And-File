f = open(r'E:\小论文动画程序\处理的数据\Add\16帧\RafFuncAddCanvas16.txt')
# 根据空格切分成数组
dataIn = f.read().split()
# 转换成number型数组
data = [float(x) for x in dataIn]
print("")
# 排序求中位数
dataSort = sorted(data)
if len(dataSort) % 2 == 1:
    print("中位数：",dataSort[int((len(dataSort)-1/2))])
else: 
    print("中位数：",(dataSort[int(len(dataSort)/2-1)]+dataSort[int(len(dataSort)/2)])/2)
# 求方差
avg = sum(data)/len(data)
# print("平均数：",avg)
sumVari = 0
for i in data: 
    sumVari +=(i-avg) **2
print("方差：",sumVari / len(data))    
# 求极差
# print(max(data),min(data))
print("极差：",max(data) - min(data))
