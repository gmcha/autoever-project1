## 이슈

당시 코드 에러를 스크린샷하지 못했지만,,

```cpp
#include <bits/stdc++.h>
```

해당 include 지시문에 물결 표시가 뜨고, <bits/stdc++.h>를 찾을 수 없다는 에러가 뜬다.

## 문제

나는 M1 Mac을 쓰고 있는데, 확인해 보니 Mac OS에서는 기본적으로 <mark>clang 컴파일러</mark>를 쓴다고 한다.
<bits/stdc++.h>는 GCC 컴파일러에만 지원이 된다.

<hr>

## 해결

1. 터미널에 c++ --version을 쳐서 InstalledDir를 확인한다.
   ![](https://velog.velcdn.com/images/gamin0323/post/eae55f85-50e1-479e-8009-713556b81de4/image.png)

2. Finder에서 InstalledDir의 path를 복붙해서 찾는다.
   폴더 이동 단축키(Command + Shift + G)를 사용하면 편리하다.

3. 폴더 이동 후, 그 상위 폴더인 usr에 있는 usr/include로 들어간다.
4. include 디렉토리에 bits라는 이름의 폴더를 하나 만들어준다

5. [여기](https://miniolife.tistory.com/11)있는 <bits/stdc++.h> 파일을 다운로드하여 usr/include/bits에 저장한다.
6. 끝!
   더 이상 물결 표시가 없고 코드 실행이 잘 된다. ![](https://velog.velcdn.com/images/gamin0323/post/6b2532f1-7931-43c0-8c2a-42e089c5692c/image.png)

## 참고 레퍼런스

- [https://codingcoco.tistory.com/23](https://codingcoco.tistory.com/23)
- [https://velog.io/@sigint_107/M1-MAC-VScode에서-bitsstdc.h가-import-안되는-경우](https://velog.io/@sigint_107/M1-MAC-VScode%EC%97%90%EC%84%9C-bitsstdc.h%EA%B0%80-import-%EC%95%88%EB%90%98%EB%8A%94-%EA%B2%BD%EC%9A%B0)
- [https://codingcoco.tistory.com/23](https://codingcoco.tistory.com/23)
