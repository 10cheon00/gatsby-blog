---
title: 24-2-14 Spring Security JWTAuthenticationFilter
date: '2024-02-14T08:17:59.195Z'
category:
  name: Study
  category:
    name: Spring
tags: ["TIL", "spring"]
---

# JWT

## Header

토큰의 타입과 선택한 암호화 알고리즘에 대해 명시하고 있다.

## Payload



## Signature



# JWT를 쓰는 이유

## 장점 

- 서명된 토큰이므로, 다른 토큰보다 보안성이 높다. 
- 토큰의 payload에 정보를 저장할 수 있다.
- 도메인과 애플리케이션에 관계없이 사용가능하다.
- 표준으로 지정되어 있다.

## 단점

- payload가 커질 경우 통신에 부하가 걸리게 된다.
- 토큰의 수명을 관리해야한다.

# Login Flow



# FilterChain

# 구현

