尚硅谷_ts

pandas/numpy echarts python3.8 django drf umi celery socket redis pytest
umi react echart antd 

https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%AE%80%E4%BB%8B

vim(command):
https://unix.stackexchange.com/questions/115886/anyway-to-navigate-percentage-wise-in-vim
50% will come to log 50% position(no need to access command mode otherwise it will not working)

gg Move to the first line of the file
G Move to the last line

20240403
1. there exists a big dataframe(size(3400000, 8)),i want to get subdataframe by column values
   # first solusion

   # get unique y name, then get every group data by y name
   y_values = data[v_y_name].unique().tolist()
   for y_value in y_values:
    # one segment data
    # segment_data = data[data[v_y_name] == y_value] (34s)

    # segment_data = data.loc[data[v_y_name] == y_value] (34s)


   it's too slow then i think why not group by v_y_name then get every group dataframe by name,
   then i try following code:

   y_groups = data.groupby(v_y_name)
   y_values = data[v_y_name].unique().tolist()
   for y_value in y_values:
     # much faster
     segment_data = y_groups.get_group(y_value) (0.5s)


   https://www.geeksforgeeks.org/ways-to-filter-pandas-dataframe-by-column-values/

   
   
