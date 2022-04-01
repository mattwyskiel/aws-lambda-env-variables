declare namespace NodeJS {
  export interface ProcessEnv {
    // -- Reserved --
    /**
     * The handler location configured on the function.
     */
    _HANDLER: string;
    /**
     * The [X-Ray tracing header](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).
     */
    _X_AMZN_TRACE_ID: string;
    /**
     * The AWS Region where the Lambda function is executed.
     */
    AWS_REGION: string;
    /**
     * The [runtime identifier](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html), prefixed by `AWS_Lambda_`—for example, `AWS_Lambda_java8`.
     */
    AWS_EXECUTION_ENV: "AWS_LAMBDA_nodejs14.x" | "AWS_LAMBDA_nodejs12.x";
    /**
     * The name of the function.
     */
    AWS_LAMBDA_FUNCTION_NAME: string;
    /**
     * The amount of memory available to the function in MB.
     */
    AWS_LAMBDA_FUNCTION_MEMORY_SIZE: string;
    /**
     * The version of the function being executed.
     */
    AWS_LAMBDA_FUNCTION_VERSION: string;
    /**
     * The initialization type of the function, which is either on-demand or provisioned-concurrency. For information, see [Configuring provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html).
     */
    AWS_LAMBDA_INITIALIZATION_TYPE: "on-demand" | "provisioned-concurrency";
    /**
     * The name of the Amazon CloudWatch Logs group for the function
     */
    AWS_LAMBDA_LOG_GROUP_NAME: string;
    /**
     * The name of the Amazon CloudWatch Logs stream for the function
     */
    AWS_LAMBDA_LOG_STREAM_NAME: string;
    /**
     * The access keys obtained from the function's [execution role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html).
     */
    AWS_ACCESS_KEY: string;
    /**
     * The access keys obtained from the function's [execution role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html).
     */
    AWS_ACCESS_KEY_ID: string;
    /**
     * The access keys obtained from the function's [execution role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html).
     */
    AWS_SECRET_ACCESS_KEY: string;
    /**
     * The access keys obtained from the function's [execution role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html).
     */
    AWS_SESSION_TOKEN: string;
    /**
     * ([Custom runtime](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html)) The host and port of the [runtime API](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-api.html).
     */
    AWS_LAMBDA_RUNTIME_API: string;
    /**
     * The path to your Lambda function code.
     */
    LAMBDA_TASK_ROOT: string;
    /**
     * The path to runtime libraries.
     */
    LAMBDA_RUNTIME_DIR: string;
    /**
     * The environment's time zone (UTC). The execution environment uses NTP to synchronize the system clock.s
     */
    TZ: string;

    // -- Unreserved --
    /**
     * The locale of the runtime (en_US.UTF-8).
     */
    LANG: string;
    /**
     * The execution path (`/usr/local/bin:/usr/bin/:/bin:/opt/bin`).
     */
    PATH: string;
    /**
     * The system library path (`/lib64:/usr/lib64:$LAMBDA_RUNTIME_DIR:$LAMBDA_RUNTIME_DIR/lib:$LAMBDA_TASK_ROOT:$LAMBDA_TASK_ROOT/lib:/opt/lib`).
     */
    LD_LIBRARY_PATH: string;
    /**
     * The Node.js library path (`/opt/nodejs/node12/node_modules/:/opt/nodejs/node_modules:$LAMBDA_RUNTIME_DIR/node_modules`).
     */
    NODE_PATH: string;
    /**
     * For X-Ray tracing, Lambda sets this to `LOG_ERROR` to avoid throwing runtime errors from the X-Ray SDK.
     */
    AWS_XRAY_CONTEXT_MISSING: string;
    /**
     * For X-Ray tracing, the IP address and port of the X-Ray daemon.
     */
    AWS_XRAY_DAEMON_ADDRESS: string;
  }
}
