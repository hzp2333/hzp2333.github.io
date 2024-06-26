# [anaconda error]anaconda bytes object has no attribute get


When running anaconda, the startup interface suddenly cannot be opened, but ` jupyter` and `notebook ` can be opened and run directly. The error message is shown in the figure below.

![I can’t quite understand this](/img/anaconda.en-20240523120650966.webp)
None of the commonly used solutions on the Internet work, but here are some:

-   Upgrade installation package，

```python
conda update navigator
conda update anaconda-navigator

conda update conda
conda update --all
```

-   Delete Files

> Delete the `.condarc` file (usually in C drive, user, current user).

There is no one on the Internet who has the same situation as me. Finally, I opened `anaconda powershell prompt` and saw the specific problem, which was a problem with path recognition.

![Although only a J was exposed, I still noticed that it was java](/img/v2-476787b0744665f6ef8864da337300e5_720w.png)

The problem is a Windows environment variable conflict: my `user variable path` and `environment variable path` settings conflict and are inconsistent. Causes the anaconda in the user variables to be recognized into the Java environment of the system variables.

![Solution: Unify user variables and system variables, or delete the java path](/img/v2-a640242f7bfc731fbbf8dea3f717372f_720w-17106790388694.jpeg)

Solution: Unify user variables and system variables, or delete the java path. Personally, this is because the invalid path is blocking the way. I personally deleted the wrong path for Java: `%Java\_Home%\bin; %Java\_Home%\jre\bin`. Afterwards, it was checked that the Java environment was not affected, and the anaconda environment was also restored.


