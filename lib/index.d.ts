declare const chalk: any;
declare const util: any;
declare function getLogArgs({ args, buildStep, format, tag, }: {
    args: any;
    buildStep?: string | undefined;
    format: any;
    tag: any;
}): {
    _buildStep: string;
    _msg: any;
    _tag: any;
    _time: string;
};
