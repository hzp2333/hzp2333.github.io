# [Anaconda Error Solution] Anaconda bytes object has no attribute get


Today, when I ran Anaconda, it suddenly could not open the startup interface, but I could directly open and run Jupyter and Notebook. The error situation is shown in the picture below.

![I can't understand this either](/img/anaconda.en-20240523120650966.webp)

The commonly used solutions online did not work, but I will still list them here.

-   Upgrade the installation packages,

```python
conda update navigator
conda update anaconda-navigator

conda update conda
conda update --all
```

-   Delete files

> Delete the `.condarc` file (usually found in C drive, Users, Current User).

There was no similar situation online, and in the end, I opened the **Anaconda Powershell Prompt** and saw the specific issue, which was a problem with path recognition.

![I can't understand this either](/img/anaconda.zh-cn-20240802122011236.webp)

The reason was a conflict in Windows environment variables: my user variable path and system variable path settings conflicted and were inconsistent. This caused Anaconda in the user variable to be recognized as the Java environment in the system variable.

![Solution: unify user variables and system variables, or delete Java path](/img/anaconda.zh-cn-20240802115752502.webp)

Solution: unify user variables and system variables, or delete the Java path. Personally, it was because an **invalid path blocked the way**. I deleted the incorrect Java path: `%Java_Home%\bin;%Java_Home%\jre\bin`. After that, I checked that the Java environment was not affected, and the Anaconda environment was restored.
