# 🌐 React + MetaMask 연동 DApp 포트폴리오

> **Web3 기술을 활용한 블록체인 기반 웹 애플리케이션**

이 프로젝트는 React와 MetaMask를 연동하여 이더리움 블록체인과 상호작용할 수 있는 탈중앙화 애플리케이션(DApp)을 구현한 포트폴리오입니다.

## 🚀 프로젝트 개요

### 주요 기능
- **MetaMask 지갑 연결/해제**: 사용자의 이더리움 지갑을 안전하게 연결
- **실시간 지갑 상태 모니터링**: 계정 주소, 잔액, 체인 ID, 블록 번호, Nonce 등 실시간 표시
- **메시지 서명**: 개인키를 사용한 디지털 서명 기능
- **스마트 컨트랙트 배포 및 상호작용**: Greeting 컨트랙트를 통한 블록체인 데이터 조작

### 기술 스택
- **Frontend**: React 18.2.0, Styled Components
- **Blockchain**: Ethers.js 5.6.9, Web3-React 6.1.9
- **Smart Contract**: Solidity (Hardhat 컴파일)
- **Development**: Create React App, MetaMask

## 🏗️ 아키텍처

### 모듈화된 컴포넌트 구조
```
src/
├── components/           # UI 컴포넌트
│   ├── Connect.jsx      # 지갑 연결/해제
│   ├── WalletStatus.jsx # 지갑 상태 표시
│   ├── SignMessage.jsx  # 메시지 서명
│   └── ContractCall.jsx # 스마트 컨트랙트 상호작용
├── utils/               # 유틸리티 함수
│   ├── connectors.js    # Web3 연결 설정
│   ├── hooks.js         # 커스텀 훅
│   └── provider.js      # 이더리움 프로바이더
└── artifacts/           # 컴파일된 스마트 컨트랙트
```

### 핵심 기능 구현

#### 1. 지갑 연결 관리
- **InjectedConnector**: MetaMask와의 안전한 연결
- **자동 재연결**: 이전에 연결된 지갑 자동 복원
- **에러 핸들링**: 다양한 연결 오류 상황 처리

#### 2. 실시간 블록체인 데이터
- **계정 정보**: 주소, 잔액, Nonce 실시간 업데이트
- **네트워크 정보**: 체인 ID, 블록 번호 모니터링
- **이벤트 리스너**: 블록 업데이트 시 자동 데이터 갱신

#### 3. 스마트 컨트랙트 상호작용
- **컨트랙트 배포**: Greeting 컨트랙트 동적 배포
- **상태 조회**: `greet()` 함수를 통한 데이터 읽기
- **상태 변경**: `setGreeting()` 함수를 통한 데이터 쓰기

## 🛠️ 설치 및 실행

### 필수 요구사항
- Node.js 14.0 이상
- MetaMask 브라우저 확장 프로그램
- 이더리움 테스트넷 (Rinkeby, Goerli 등)

### 설치
```bash
# 의존성 설치
npm install

# 또는
yarn install
```

### 실행
```bash
# 개발 서버 시작
npm start

# 브라우저에서 http://localhost:3000 접속
```

## 📱 사용 방법

1. **MetaMask 설치**: 브라우저에 MetaMask 확장 프로그램 설치
2. **지갑 연결**: "Connect" 버튼을 클릭하여 지갑 연결
3. **상태 확인**: 연결된 지갑의 정보가 실시간으로 표시됨
4. **메시지 서명**: "Sign Message" 버튼으로 디지털 서명 테스트
5. **컨트랙트 배포**: "Deploy Greeting Contract" 버튼으로 스마트 컨트랙트 배포
6. **인사말 변경**: 배포된 컨트랙트의 인사말을 자유롭게 수정

## 🔧 주요 기술적 특징

### Web3-React 통합
- **Context API**: 전역 상태 관리로 Web3 연결 상태 공유
- **Custom Hooks**: 재사용 가능한 Web3 로직 캡슐화
- **Provider Pattern**: 이더리움 프로바이더 추상화

### 에러 처리
- **연결 오류**: MetaMask 미설치, 네트워크 오류 등 상황별 처리
- **트랜잭션 오류**: 가스비 부족, 컨트랙트 오류 등 세밀한 에러 핸들링
- **사용자 경험**: 직관적인 오류 메시지와 복구 가이드

### 성능 최적화
- **메모이제이션**: 불필요한 리렌더링 방지
- **이벤트 정리**: 컴포넌트 언마운트 시 이벤트 리스너 정리
- **조건부 렌더링**: 연결 상태에 따른 UI 최적화

## 🎯 학습 목표 달성

이 프로젝트를 통해 다음 기술들을 실습하고 습득했습니다:

- **React Hooks**: useState, useEffect, useCallback을 활용한 상태 관리
- **Web3 개발**: 이더리움 블록체인과의 상호작용
- **MetaMask 연동**: 브라우저 지갑과의 안전한 연결
- **스마트 컨트랙트**: Solidity 컨트랙트 배포 및 상호작용
- **에러 처리**: 다양한 예외 상황에 대한 견고한 처리
- **모듈화**: 재사용 가능한 컴포넌트 설계



**개발자**: [본인 이름]  
**기술 스택**: React, Web3, Ethers.js, MetaMask, Solidity  
**프로젝트 기간**: [개발 기간]  
**GitHub**: [저장소 링크]
