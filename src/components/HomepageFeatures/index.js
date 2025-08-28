import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link'; // Import Link for navigation
import styles from './styles.module.css';
import Image from "@theme/IdealImage";

import pythonLogoUrl from '@site/static/img/language-logo/python-logo-only.png';
import javaLogoUrl from '@site/static/img/language-logo/java-logo.png';
import javaScriptLogoUrl from '@site/static/img/language-logo/javascript-logo.png';
import cLogo from '@site/static/img/language-logo/c_logo.png';
import cppLogo from '@site/static/img/language-logo/cpp_logo.png';
import goLogo from '@site/static/img/language-logo/go_logo.png';
import rustLogo from '@site/static/img/language-logo/rust_logo.png';
import sqlLogo from '@site/static/img/language-logo/sql_logo.png';
import phpLogo from '@site/static/img/language-logo/php_logo.png';
import cSharpLogo from '@site/static/img/language-logo/csharp_logo.png';
import kotlinLogo from '@site/static/img/language-logo/kotlin_logo.png';
import swiftLogo from '@site/static/img/language-logo/swift_logo.png';
import angularLogo from '@site/static/img/framework-logo/angular_logo.png';
import djangoLogo from '@site/static/img/framework-logo/django_logo.png';
import dotnetLogo from '@site/static/img/framework-logo/dotnet_logo.png';
import echoLogo from '@site/static/img/framework-logo/echo_logo.png';
import expressLogo from '@site/static/img/framework-logo/express_logo.png';
import fastapiLogo from '@site/static/img/framework-logo/fastapi_logo.png';
import flaskLogo from '@site/static/img/framework-logo/flask_logo.png';
import ginLogo from '@site/static/img/framework-logo/gin_logo.png';
import nextjsLogo from '@site/static/img/framework-logo/nextjs_logo.png';
import springLogo from '@site/static/img/framework-logo/spring_logo.png';
import pandasLogo from '@site/static/img/library-logo/pandas_logo.png';
import pytorchLogo from '@site/static/img/library-logo/pytorch_logo.png';
import tensorflowLogo from '@site/static/img/library-logo/tensorflow_logo.png';
import reactLogo from '@site/static/img/framework-logo/react_logo.png';
import vueLogo from '@site/static/img/framework-logo/vue_logo.png';
import wordpressLogo from '@site/static/img/framework-logo/wordpress_logo.png';
import kongLogo from '@site/static/img/middleware-logo/kong_logo.png';
import redisLogo from '@site/static/img/middleware-logo/redis_logo.png';
import typeScriptLogo from '@site/static/img/language-logo/typescript_logo.png';
import mysqlLogo from '@site/static/img/database-logo/mysql_logo.png';
import postgresqlLogo from '@site/static/img/database-logo/postgresql_logo.png';
import mongodbLogo from '@site/static/img/database-logo/mongodb_logo.png';
import kubernetesLogo from '@site/static/img/devops-logo/kubernetes_logo.png';
import cicdLogo from '@site/static/img/devops-logo/cicd_logo.png';
import arduinoLogo from '@site/static/img/iot-logo/arduino_logo.png';
import cssLogo from '@site/static/img/web-logo/css_logo.png';
import elasticsearchLogo from '@site/static/img/database-logo/elasticsearch_logo.png';
import dockerLogo from '@site/static/img/devops-logo/docker_logo.png';
import kafkaLogo from '@site/static/img/middleware-logo/kafka_logo.png';
import gitLogo from '@site/static/img/devops-logo/git_logo.png';
import jenkinsLogo from '@site/static/img/devops-logo/jenkins_logo.png';
import nacosLogo from '@site/static/img/middleware-logo/nacos_logo.png';
import nginxLogo from '@site/static/img/middleware-logo/nginx_logo.png';
import rocketmqLogo from '@site/static/img/middleware-logo/rocketmq_logo.png';
import seataLogo from '@site/static/img/middleware-logo/seata_logo.png';
import sentinelLogo from '@site/static/img/middleware-logo/sentinel_logo.png';
import centosLogo from '@site/static/img/os-logo/centos_logo.png';
import ubuntuLogo from '@site/static/img/os-logo/ubuntu_logo.png';
import debianLogo from '@site/static/img/os-logo/debian_logo.png';
import dsaLogo from '@site/static/img/fundamentals-logo/dsa_logo.png';
import networkLogo from '@site/static/img/fundamentals-logo/network_logo.png';
import interviewLogo from '@site/static/img/fundamentals-logo/interview_logo.png';
import springcloudLogo from '@site/static/img/framework-logo/spring_cloud_logo.png';
import dbaLogo from '@site/static/img/fundamentals-logo/database_logo.png';
import stm32Logo from '@site/static/img/iot-logo/stm32_logo.png';
import iot51Logo from '@site/static/img/iot-logo/51_logo.png';
import htmlLogo from '@site/static/img/web-logo/html_logo.png';
import osLogo from '@site/static/img/fundamentals-logo/os_logo.png';
import rabbitmqLogo from '@site/static/img/middleware-logo/rabbitmq_logo.png';
import zookeeperLogo from '@site/static/img/middleware-logo/zookeeper_logo.png';
import wechatminiprogramLogo from '@site/static/img/framework-logo/wechatminiprogram_logo.png';
import androidLogo from '@site/static/img/framework-logo/android_logo.png';
import leanLogo from '@site/static/img/fundamentals-logo/lean_logo.png';
import cassandraLogo from '@site/static/img/database-logo/cassandra_logo.png';
import hbaseLogo from '@site/static/img/database-logo/hbase_logo.png';
import hiveLogo from '@site/static/img/database-logo/hive_logo.png';
import airflowLogo from '@site/static/img/data-logo/airflow_logo.png';
import rLogo from '@site/static/img/data-logo/r_logo.png';
import drillLogo from '@site/static/img/data-logo/drill_logo.png';
import hadoopLogo from '@site/static/img/data-logo/hadoop_logo.png';
import sparkLogo from '@site/static/img/data-logo/spark_logo.png';

import alloyLogo from '@site/static/img/observability-logo/alloy_logo.png';
import grafanaLogo from '@site/static/img/observability-logo/grafana_logo.png';
import lokiLogo from '@site/static/img/observability-logo/loki_logo.png';
import prometheusLogo from '@site/static/img/observability-logo/prometheus_logo.png';
import jaegerLogo from '@site/static/img/observability-logo/jaeger_logo.png';
import opentelemetryLogo from '@site/static/img/observability-logo/opentelemetry_logo.png';
import skywalkingLogo from '@site/static/img/observability-logo/skywalking_logo.png';
import zipkinLogo from '@site/static/img/observability-logo/zipkin_logo.png';
import prismLogo from '@site/static/img/fundamentals-logo/prism_logo.png';
const fundamentalsList = [
    {
        title: '八股面试宝典',
        Icon: () => {
            return <Image img={interviewLogo} className={styles.featureImage}/>;
        },
        url: "/docs/fundamental/interview",
        description: <>八股面试宝典是一份全面的技术面试指南，包括常见问题、算法题、系统设计、行为面试等内容。</>,
    },
    {
        title: '数据结构与算法',
        Icon: () => {
            return <Image img={dsaLogo} className={styles.featureImage}/>;
        },
        url: "/docs/fundamental/algorithm",
        description: <>数据结构与算法是计算机科学的基础，用于解决问题和优化性能，广泛应用于软件开发和系统设计。</>,
    },
    {
        title: '计算机网络',
        Icon: () => {
            return <Image img={networkLogo} className={styles.featureImage}/>;
        },
        url: "/docs/fundamental/network",
        description: <>计算机网络是计算机系统之间相互连接的通信系统，用于数据传输、资源共享和远程访问。</>,
    },
    {
        title: '数据库与信息系统',
        Icon: () => {
            return <Image img={dbaLogo} className={styles.featureImage}/>;
        },
        url: "/docs/fundamental/database",
        description: <>数据库与信息系统是用于存储、管理和检索数据的软件系统，广泛应用于企业信息化和数据分析。</>,
    },
    {
        title: '操作系统',
        Icon: () => {
            return <Image img={osLogo} className={styles.featureImage}/>;
        },
        url: "/docs/fundamental/os",
        description: <>操作系统是计算机系统的核心软件，用于管理硬件资源、提供服务和运行应用程序。</>,
    },
    {
        title: '程序设计与验证 (Lean)',
        Icon: () => {
            return <Image img={leanLogo} className={styles.featureImage}/>;
        },
        url: "/docs/fundamental/lean",
        description: <>程序设计与验证是一种系统化的软件开发方法，用于构建高质量、高效率的软件系统。</>,
    },
    {
        title: 'PRISM概率模型检测器',
        Icon: () => {
            return <Image img={prismLogo} className={styles.featureImage}/>;
        },
        url: "/docs/fundamental/prism",
        description: <>PRISM是一种用于建模和分析随机系统的工具，广泛应用于概率模型检测、性能评估和可靠性分析。</>,
    },

];

const programmingLanguagesList = [
    {
        title: 'Python 3',
        Icon: () => {
            return <Image img={pythonLogoUrl} className={styles.featureImage}/>;
        },
        url: "/docs/language/python",
        description: <>Python 3 是一种现代、简洁、易读的高级编程语言，支持面向对象、函数式和脚本编程，广泛应用于数据分析、人工智能、Web
            开发和自动化任务。</>,
    },
    {
        title: 'Java',
        Icon: () => {
            return <Image img={javaLogoUrl} className={styles.featureImage}/>;
        },
        url: "/docs/language/java",
        description: <>Java
            是一种面向对象的跨平台编程语言，具有强类型、安全性高、支持多线程和自动内存管理（GC）等特性，广泛用于企业级应用、移动开发（Android）和大数据处理。</>,
    },
    {
        title: 'C',
        Icon: () => {
            return <Image img={cLogo} className={styles.featureImage}/>;
        },
        url: "/docs/language/c",
        description: <>C
            是一种通用的过程式编程语言，具有高效的系统编程能力，广泛用于操作系统、嵌入式系统、编译器和游戏开发。</>,
    },
    {
        title: 'C++',
        Icon: () => {
            return <Image img={cppLogo} className={styles.featureImage}/>;
        },
        url: "/docs/language/cpp",
        description: <>C++
            是一种高性能、通用的编程语言，支持面向对象、泛型和过程式编程，广泛应用于游戏开发、系统编程、嵌入式开发和高性能计算。</>,
    },
    {
        title: 'C#',
        Icon: () => {
            return <Image img={cSharpLogo} className={styles.featureImage}/>;
        },
        url: "/docs/language/csharp",
        description: <>C# 是一种面向对象的编程语言，由微软开发，广泛用于 Windows 应用程序、游戏开发、Web
            开发和移动应用开发。</>,
    },
    {
        title: 'JavaScript',
        Icon: () => {
            return <Image img={javaScriptLogoUrl} className={styles.featureImage}/>;
        },
        url: "/docs/language/javascript",
        description: <>JavaScript
            是一种高级、解释型、动态类型的编程语言，广泛用于网页开发、服务器端开发、移动应用开发和物联网应用开发。</>,
    },
    {
        title: 'TypeScript',
        Icon: () => {
            return <Image img={typeScriptLogo} className={styles.featureImage}/>;
        },
        url: "/docs/language/typescript",
        description: <>TypeScript 是 JavaScript 的超集，支持静态类型、面向对象和模块化编程，广泛用于大型 Web
            应用开发。</>,
    },
    {
        title: 'Go',
        Icon: () => {
            return <Image img={goLogo} className={styles.featureImage}/>;
        },
        url: "/docs/language/go",
        description: <>Go
            是一种静态类型、编译型、并发安全的编程语言，具有高效的并发编程模型和内置的网络编程库，广泛用于云原生应用开发。</>,
    },
    {
        title: 'Swift',
        Icon: () => {
            return <Image img={swiftLogo} className={styles.featureImage}/>;
        },
        url: "/docs/language/swift",
        description: <>Swift 是一种现代、安全、快速的编程语言，广泛用于 iOS、macOS、watchOS 和 tvOS 应用开发。</>,
    },
    {
        title: 'PHP',
        Icon: () => {
            return <Image img={phpLogo} className={styles.featureImage}/>;
        },
        url: "/docs/language/php",
        description: <>PHP 是一种通用的服务器端脚本语言，广泛用于 Web 开发和构建动态网页。</>,
    },
];

const webList = [
    {
        title: "微信小程序",
        Icon: (alt) => {
            return <Image img={wechatminiprogramLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/framework/wechatminiprogram",
        description: <>微信小程序是一种轻量级的应用程序，广泛用于微信生态系统和移动应用开发。</>,
    },
    // {
    //     title: 'TypeScript',
    //     Icon: () => {
    //         return <Image img={typeScriptLogo} className={styles.featureImage}/>;
    //     },
    //     url: "/docs/language/typescript",
    //     description: <>TypeScript 是 JavaScript 的超集，支持静态类型、面向对象和模块化编程，广泛用于大型 Web
    //         应用开发。</>,
    // },
    {
        title: "CSS",
        Icon: (alt) => {
            return <Image img={cssLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/web/css",
        description: <>CSS 是一种用于定义网页样式的样式表语言，广泛用于网页设计和开发。</>,
    },
    {
        title: "HTML",
        Icon: (alt) => {
            return <Image img={htmlLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/web/html",
        description: <>HTML 是一种用于创建网页的标记语言，广泛用于网页设计和开发。</>,
    },
    {
        title: 'JavaScript',
        Icon: () => {
            return <Image img={javaScriptLogoUrl} className={styles.featureImage}/>;
        },
        url: "/docs/language/javascript",
        description: <>JavaScript
            是一种高级、解释型、动态类型的编程语言，广泛用于网页开发、服务器端开发、移动应用开发和物联网应用开发。</>,
    },
    {
        title: "Android (Java)",
        Icon: (alt) => {
            return <Image img={androidLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/framework/android_java",
        description: <>Android 是一个开源的移动操作系统，广泛用于智能手机、平板电脑和可穿戴设备。</>,
    },
    {
        title: "Android (Kotlin)",
        Icon: (alt) => {
            return <Image img={androidLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/framework/android_kotlin",
        description: <>Android 是一个开源的移动操作系统，广泛用于智能手机、平板电脑和可穿戴设备。</>,
    },
    {
        title: "Next.js",
        Icon: (alt) => {
            return <Image img={nextjsLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/framework/nextjs",
        description: <>Next.js 是一个基于 React 的 Web 开发框架，广泛用于构建静态网站和单页面应用。</>,
    },
    {
        title: "React",
        Icon: (alt) => {
            return <Image img={reactLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/framework/react",
        description: <>React 是一个用于构建用户界面的 JavaScript 库，广泛用于单页面应用和大型 Web 应用开发。</>,
    },
    {
        title: "Vue.js",
        Icon: (alt) => {
            return <Image img={vueLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/framework/vue",
        description: <>Vue.js 是一个渐进式 JavaScript 框架，广泛用于构建交互式的 Web 界面。</>,
    },
];


const frameworkList = [
    {
        title: "Spring",
        Icon: (alt) => {
            return <Image img={springLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/framework/spring",
        description: <>Spring 是一个轻量级的开源框架，广泛用于企业级 Java
            应用开发，提供了依赖注入、AOP、事务管理、数据访问等功能。</>,
    },
    {
        title: "Spring Cloud Alibaba",
        Icon: (alt) => {
            return <Image img={springcloudLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/framework/springcloud_alibaba",
        description: <>Spring Cloud Alibaba 是一个基于 Spring Cloud 的微服务框架，广泛用于分布式系统开发和云原生应用开发。</>,
    },
    {
        title: "Django",
        Icon: (alt) => {
            return <Image img={djangoLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/framework/django",
        description: <>Django 是一个开源的 Web 框架，广泛用于快速开发安全、可扩展的 Web 应用程序。</>,
    },
    {
        title: "Gin",
        Icon: (alt) => {
            return <Image img={ginLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/framework/gin",
        description: <>Gin 是一个轻量级的 Web 框架，基于 Go 语言，广泛用于构建高性能的 Web 服务。</>,
    },
];

const observabilityList = [
    {
        title: "Alloy",
        Icon: (alt) => {
            return <Image img={alloyLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/observability/alloy",
        description: <>Alloy 是一个开源的分布式追踪系统，广泛用于监控、调试和优化分布式系统。</>,
    },
    {
        title: "Prometheus",
        Icon: (alt) => {
            return <Image img={prometheusLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/observability/prometheus",
        description: <>Prometheus 是一个开源的监控系统，广泛用于收集、存储和查询时间序列数据。</>,
    },
    {
        title: "Loki",
        Icon: (alt) => {
            return <Image img={lokiLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/observability/loki",
        description: <>Loki 是一个开源的日志聚合系统，广泛用于收集、存储和查询日志数据。</>,
    },
    {
        title: "Grafana",
        Icon: (alt) => {
            return <Image img={grafanaLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/observability/grafana",
        description: <>Grafana 是一个开源的数据可视化工具，广泛用于监控、报警和分析数据。</>,
    },
    {
        title: "Jaeger",
        Icon: (alt) => {
            return <Image img={jaegerLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/observability/jaeger",
        description: <>Jaeger 是一个开源的分布式追踪系统，广泛用于监控、调试和优化分布式系统。</>,
    },
    {
        title: "OpenTelemetry",
        Icon: (alt) => {
            return <Image img={opentelemetryLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/observability/opentelemetry",
        description: <>OpenTelemetry 是一个开源的可观测性框架，提供了一套标准化的 API 和工具，用于收集、处理和导出遥测数据（traces, metrics, logs）。</>,
    },
    {
        title: "skywalking",
        Icon: (alt) => {
            return <Image img={skywalkingLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/observability/skywalking",
        description: <>SkyWalking 是一个开源的分布式应用性能监控（APM）系统，广泛用于监控、追踪和诊断微服务、云原生和容器化应用。</>,
    },
    {
        title: "zipkin",
        Icon: (alt) => {
            return <Image img={zipkinLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/observability/zipkin",
        description: <>Zipkin 是一个开源的分布式追踪系统，帮助收集和查询分布式系统中的遥测数据，用于监控、调试和优化应用性能。</>,
    },

];


const data_ai_List = [
    {
        title: "R Language",
        Icon: (alt) => {
            return <Image img={rLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/data/r",
        description: <>R 语言是一种用于数据分析和统计计算的编程语言，广泛用于数据可视化、机器学习和数据挖掘。</>,
    },
    {
        title: "Airflow",
        Icon: (alt) => {
            return <Image img={airflowLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/data/airflow",
        description: <>Airflow 是一个开源的工作流自动化和调度系统，广泛用于数据处理、ETL 和任务调度。</>,
    },
    {
        title: "Drill",
        Icon: (alt) => {
            return <Image img={drillLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/data/drill",
        description: <>Drill 是一个开源的分布式 SQL 查询引擎，广泛用于大数据查询和分析。</>,
    },
    {
        title: "Hadoop",
        Icon: (alt) => {
            return <Image img={hadoopLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/data/hadoop",
        description: <>Hadoop 是一个开源的分布式计算框架，广泛用于大数据处理和分析。</>,
    },
    {
        title: "Spark",
        Icon: (alt) => {
            return <Image img={sparkLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/data/spark",
        description: <>Spark 是一个开源的分布式计算框架，广泛用于大数据处理和机器学习。</>,
    },
    {
        title: "Pandas",
        Icon: (alt) => {
            return <Image img={pandasLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/data/pandas",
        description: <>Pandas 是一个开源的数据分析库，广泛用于数据处理、数据清洗和数据可视化。</>,
    },
    {
        title: "PyTorch",
        Icon: (alt) => {
            return <Image img={pytorchLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/ai/pytorch",
        description: <>PyTorch 是一个开源的深度学习框架，广泛用于构建神经网络、训练模型和部署应用。</>,
    },
    {
        title: "TensorFlow",
        Icon: (alt) => {
            return <Image img={tensorflowLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/ai/tensorflow",
        description: <>TensorFlow 是一个开源的机器学习框架，广泛用于构建神经网络、训练模型和部署应用。</>,
    },
];

const middlewareList = [
    {
        title: "Nginx",
        Icon: (alt) => {
            return <Image img={nginxLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/middleware/nginx",
        description: <>Nginx 是一个高性能的 Web 服务器和反向代理服务器，广泛用于负载均衡、缓存和网关等场景。</>,
    },
    {
        title: "Redis",
        Icon: (alt) => {
            return <Image img={redisLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/middleware/redis",
        description: <>Redis
            是一个高性能的键值存储系统，支持多种数据结构和持久化方式，广泛用于缓存、消息队列和会话管理等场景。</>,
    },
    {
        title: "Kafka",
        Icon: (alt) => {
            return <Image img={kafkaLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/middleware/kafka",
        description: <>Kafka 是一个高吞吐量的分布式消息系统，广泛用于日志收集、事件处理和流处理等场景。</>,
    },
    {
        title: "RocketMQ",
        Icon: (alt) => {
            return <Image img={rocketmqLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/middleware/rocketmq",
        description: <>RocketMQ 是一个开源的分布式消息中间件，广泛用于异步通信、事件驱动和流处理等场景。</>,
    },
    {
        title: "RabbitMQ",
        Icon: (alt) => {
            return <Image img={rabbitmqLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/middleware/rabbitmq",
        description: <>RabbitMQ 是一个开源的消息队列系统，广泛用于消息传递、事件驱动和任务队列等场景。</>,
    },
    {
        title: "Nacos",
        Icon: (alt) => {
            return <Image img={nacosLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/middleware/nacos",
        description: <>Nacos 是一个动态服务发现、配置管理和服务管理平台，广泛用于微服务架构和云原生应用开发。</>,
    },
    {
        title: "Seata",
        Icon: (alt) => {
            return <Image img={seataLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/middleware/seata",
        description: <>Seata 是一个开源的分布式事务解决方案，广泛用于微服务架构和分布式系统开发。</>,
    },
    {
        title: "Sentinel",
        Icon: (alt) => {
            return <Image img={sentinelLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/middleware/sentinel",
        description: <>Sentinel 是一个轻量级的流量控制和熔断降级框架，广泛用于微服务架构和分布式系统开发。</>,
    },
    {
        title: "Zookeeper",
        Icon: (alt) => {
            return <Image img={zookeeperLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/middleware/zookeeper",
        description: <>Zookeeper 是一个开源的分布式协调服务，广泛用于分布式应用、集群管理和配置中心等场景。</>,
    },

];

const databaseList = [
    {
        title: "SQL",
        Icon: (alt) => {
            return <Image img={sqlLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/database/sql",
        description: <>SQL 是一种结构化查询语言，用于数据库管理和数据操作，广泛用于关系型数据库（MySQL、PostgreSQL、SQL
            Server）。</>,
    },
    {
        title: "MySQL",
        Icon: (alt) => {
            return <Image img={mysqlLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/database/mysql",
        description: <>MySQL 是一个开源的关系型数据库管理系统，广泛用于 Web
            应用开发、数据分析和数据仓库。</>,
    },
    {
        title: "PostgreSQL",
        Icon: (alt) => {
            return <Image img={postgresqlLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/database/postgresql",
        description: <>PostgreSQL 是一个强大的开源对象关系型数据库系统，广泛用于复杂的数据处理和高性能应用。</>,
    },
    {
        title: "Elasticsearch",
        Icon: (alt) => {
            return <Image img={elasticsearchLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/database/elasticsearch",
        description: <>Elasticsearch 是一个分布式的搜索和分析引擎，广泛用于全文搜索、日志分析和数据可视化。</>,
    },
    {
        title: "Cassandra",
        Icon: (alt) => {
            return <Image img={cassandraLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/database/cassandra",
        description: <>Cassandra 是一个高性能的分布式 NoSQL 数据库，广泛用于大数据处理和实时数据分析。</>,
    },
    {
        title: "HBase",
        Icon: (alt) => {
            return <Image img={hbaseLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/database/hbase",
        description: <>HBase 是一个开源的分布式列式数据库，广泛用于大数据存储和实时查询。</>,
    },
    {
        title: "Hive",
        Icon: (alt) => {
            return <Image img={hiveLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/database/hive",
        description: <>Hive 是一个开源的数据仓库工具，广泛用于大数据分析和数据仓库。</>,
    },
];

const osList = [
    {
        title: "Ubuntu",
        Icon: (alt) => {
            return <Image img={ubuntuLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/os/ubuntu",
        description: <>Ubuntu 是一个基于 Debian 的开源 Linux 操作系统，以稳定性、安全性和用户友好性著称，广泛用于服务器、云计算和桌面环境。</>
    },
    {
        title: "Debian",
        Icon: (alt) => {
            return <Image img={debianLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/os/debian",
        description: <>Debian 是一个开源的 Linux 发行版，以稳定性、安全性和自由软件著称，广泛用于服务器、桌面环境和嵌入式设备。</>
    },
    {
        title: "CentOS",
        Icon: (alt) => {
            return <Image img={centosLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/os/centos",
        description: <>CentOS 是一个基于 Red Hat Enterprise Linux 的开源 Linux
            发行版，以稳定性、安全性和企业级支持著称，广泛用于服务器和云计算。</>
    },
]

const devopsList = [
    {
        title: "Docker",
        Icon: (alt) => {
            return <Image img={dockerLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/devops/docker",
        description: <>Docker 是一个开源的容器化平台，用于构建、打包、发布和运行应用程序，广泛用于微服务架构和持续集成部署。</>,
    },

    {
        title: "Kubernetes (k8s)",
        Icon: (alt) => {
            return <Image img={kubernetesLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/devops/kubernetes",
        description: <>Kubernetes
            是一个开源的容器编排引擎，用于自动化部署、扩展和管理容器化应用程序，广泛用于云原生应用开发。</>,
    },
    {
        title: "Git",
        Icon: (alt) => {
            return <Image img={gitLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/devops/git",
        description: <>Kubernetes
            是一个开源的容器编排引擎，用于自动化部署、扩展和管理容器化应用程序，广泛用于云原生应用开发。</>,
    },
    {
        title: "Jenkins",
        Icon: (alt) => {
            return <Image img={jenkinsLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/devops/jenkins",
        description: <>Jenkins 是一个开源的自动化服务器，用于构建、测试和部署软件项目，广泛用于持续集成和持续交付。</>,
    },

]

const iotList = [
    {
        title: "Arduino",
        Icon: (alt) => {
            return <Image img={arduinoLogo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/iot/arduino",
        description: <>Arduino 是一个开源的硬件和软件平台，用于构建电子原型和交互式项目，广泛用于物联网应用开发。</>,
    },
    {
        title: "STM32",
        Icon: (alt) => {
            return <Image img={stm32Logo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/iot/stm32",
        description: <>STM32 是一种基于 ARM Cortex-M 内核的微控制器，广泛用于嵌入式系统开发和物联网应用开发。</>,
    },
    {
        title: "51 单片机",
        Icon: (alt) => {
            return <Image img={iot51Logo} className={styles.featureImage} alt={alt.alt}/>;
        },
        url: "/docs/iot/51",
        description: <>51 单片机是一种基于 8051 内核的单片机，广泛用于嵌入式系统开发和物联网应用开发。</>,
    },

];


function IndexPageItem({Icon, title, description, url}) {
    return (
        <div className={clsx('col col--3')} style={{marginBottom: "1rem", marginTop: "1rem"}}>
            <Link to={url} className={styles.cardLink} style={{textDecoration: 'none'}}>
                <div className={clsx('card', styles.featureCard)}>
                    <div className={styles.icon_image}>
                        <Icon alt={title}/>
                    </div>
                    <div>
                        <div className="card__body text--center padding-horiz--md">
                            <Heading as="h3" className="index_page_item_title">{title}</Heading>
                            <p>{description}</p>
                        </div>
                        <div className="card__footer text--center">
                            <div className="button button--primary">
                                开始学习
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default function HomepageFeatures() {
    // // Define structured data
    // const combinedList = [
    //     ...programmingLanguagesList,
    //     ...frameworkList,
    //     ...data_ai_List,
    //     ...middlewareList,
    //     ...databaseList,
    //     ...devopsList,
    //     ...iotList
    // ];
    //
    // const structuredData = {
    //     "@context": "https://schema.org",
    //     "@type": "ItemList",
    //     "name": "Programming Languages, Frameworks, Libraries, Middleware",
    //     "description": "A collection of programming languages, frameworks, libraries, and middleware with descriptions and learning resources.",
    //     "itemListElement": combinedList.map((item, index) => ({
    //         "@type": "ListItem",
    //         "position": index + 1,
    //         "name": item.title,
    //         "url": `https://www.compilenrun.com${item.url}`,
    //         "description": item.description.props.children
    //     }))
    // };

    return (
        <section className={styles.features}>
            {/* Add the structured data component */}
            {/*<Head>*/}
            {/*    <script type="application/ld+json">*/}
            {/*        {JSON.stringify(structuredData)}*/}
            {/*    </script>*/}
            {/*</Head>*/}
            <div className="container">

                {/* Fundamentals Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>计算机科学基础知识</h2>
                </div>
                <div className="row">
                    {fundamentalsList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* Programming Languages Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>编程语言</h2>
                </div>
                <div className="row">
                    {programmingLanguagesList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* 前端开发 Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>前端开发</h2>
                </div>
                <div className="row">
                    {webList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* 后端开发 Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>后端开发</h2>
                </div>
                <div className="row">
                    {frameworkList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* 监控与分析 Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>监控与分析</h2>
                </div>
                <div className="row">
                    {observabilityList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>


                 {/*数据科学与人工智能 Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>数据科学与人工智能</h2>
                </div>
                <div className="row">
                    {data_ai_List.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* Middleware Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>中间件</h2>
                </div>
                <div className="row">
                    {middlewareList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                 {/*Database Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>数据库</h2>
                </div>
                <div className="row">
                    {databaseList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* OS Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>操作系统</h2>
                </div>
                <div className="row">
                    {osList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>

                {/* DevOps Section */}
                <div style={{marginTop: "2rem"}}>
                    <h2>集成部署</h2>
                </div>
                <div className="row">
                    {devopsList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>
                 {/*IoT Section*/}
                <div style={{marginTop: "2rem"}}>
                    <h2>物联网 (IoT)</h2>
                </div>
                <div className="row">
                    {iotList.map((props, idx) => (
                        <IndexPageItem key={idx} {...props} />
                    ))}
                </div>
            </div>
            <br/>
        </section>
    );
}