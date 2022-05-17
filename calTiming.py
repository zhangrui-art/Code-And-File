#coding=gbk
import csv
import sys
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy import signal,stats
%matplotlib
csv_data = pd.read_csv(r'E:\小论文动画程序\数据\Fill\16帧\RafFunCanvasFill16.csv') 
chn1 = csv_data['Channel 1-Analog'].values;
plt.plot(chn1)
fh = 300 
fs = 125000
b,a = signal.butter(6, fh, 'lowpass',fs=fs)
# 滤波结果
chn1_flt = signal.filtfilt(b,a, chn1)
# 根据采样中位数选取阈值
33 / 38
threshold = 2600
# 绘制出方波图像
crosses = np.where(np.diff(np.sign(chn1_flt - threshold)) > 1)[0]+1
plt.plot(chn1_flt)
plt.plot(crosses,np.ones(crosses.shape[0])*threshold,'*')
plt.show()
# 计算周期的最大值和最小值
max=np.amax(np.diff(crosses))
min=np.amin(np.diff(crosses))
print(max/fs)
print(min/fs)
np.set_printoptions(threshold=sys.maxsize)
f=open(r"E:\小论文动画程序\处理的数据\Fill\16帧\RafFunCanvasFill16.txt","w")
# 输出周期图
print(np.diff(crosses)/fs,file=f)
f.close()